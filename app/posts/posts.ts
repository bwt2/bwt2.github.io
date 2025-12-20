export type PostMeta = {
  title: string;
  date: string;
  description?: string;
};

type PostModule = {
  default: React.ComponentType;
  meta: PostMeta;
};

const modules = import.meta.glob<PostModule>('./*.tsx');

export function getAllSlugs(): string[] {
  return Object.keys(modules).map((p) =>
    p.replace('./', '').replace(/\.tsx$/, ''),
  );
}

export function getAllSlugPaths(): string[] {
  return getAllSlugs().map((slug) => `/blog/${slug}`);
}

export async function loadPost(slug: string): Promise<PostModule | null> {
  const importer = modules[`./${slug}.tsx`];
  if (!importer) return null;
  return importer();
}

export async function loadAllMeta() {
  const slugs = getAllSlugs();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await loadPost(slug);
      if (!mod?.meta) return null;
      return { slug, meta: mod.meta };
    }),
  );

  return entries
    .filter(Boolean)
    .sort((a, b) => (a!.meta.date < b!.meta.date ? 1 : -1)) as Array<{
    slug: string;
    meta: PostMeta;
  }>;
}
