import { useMemo, lazy, Suspense } from 'react';
import type { LoaderFunctionArgs } from 'react-router';
import { Link, useLoaderData, useRouteError } from 'react-router';
import { loadPost } from '~/posts/posts';
import SpinnerUrl from '~/assets/icons/spinner.svg';

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  if (!slug) {
    throw new Response('Not Found', { status: 404 });
  }

  const post = await loadPost(slug);
  if (!post) {
    throw new Response('Not Found', { status: 404 });
  }

  return { slug, meta: post.meta };
}

export default function BlogPost() {
  const { slug, meta } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const Post = useMemo(
    () =>
      lazy(async () => {
        const post = await loadPost(slug);
        if (!post) throw new Error(`Post not found: ${slug}`);
        return { default: post.default };
      }),
    [slug],
  );

  return (
    <article className="ml-5 mr-5 flex flex-col text-white">
      <h1 className="text-white font-bold text-5xl">{meta.title}</h1>
      <div className="text-white text-wrap mb-10">{meta.date}</div>

      <Suspense
        fallback={
          <img
            src={SpinnerUrl}
            width={32}
            height={32}
            alt="Loading"
            className="animate-spin self-center"
          />
        }
      >
        <Post />
      </Suspense>
    </article>
  );
}

export function ErrorBoundary() {
  const err = useRouteError();
  console.log(err);

  return (
    <main className="flex flex-col w-screen justify-center items-center">
      <h1 className="text-white font-bold text-5xl mb-10">Blog not found</h1>
      <Link
        to="/blog"
        className="text-white text-2xl mb-20 font-light underline"
      >
        Back to Blogs
      </Link>
    </main>
  );
}
