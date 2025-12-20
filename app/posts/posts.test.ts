import { describe, it, expect } from 'vitest';
import { getAllSlugs, loadPost, loadAllMeta, getAllSlugPaths } from './posts';

describe('posts.server', () => {
  it('lists slugs', () => {
    const slugs = getAllSlugs();
    expect(Array.isArray(slugs)).toBe(true);
    expect(slugs.length).toBeGreaterThan(0);
    console.log(slugs);
  });

  it('lists slug paths for prerendering', () => {
    const slugPaths = getAllSlugPaths();
    console.log(slugPaths);
    expect(Array.isArray(slugPaths)).toBe(true);
    expect(slugPaths.length).toBeGreaterThan(0);
    // for (let i = 0; i < slugPaths.length; i++) {
    //   expect(slugPaths[i].startsWith('blog/'));
    // }
  });

  it('loads a post module', async () => {
    const [slug] = getAllSlugs();
    const mod = await loadPost(slug);
    expect(mod).not.toBeNull();
    expect(mod?.default).toBeTypeOf('function');
    expect(mod?.meta).toBeTruthy();
  });

  it('loads all metadata sorted by date desc', async () => {
    const posts = await loadAllMeta();
    expect(posts.length).toBeGreaterThan(0);

    for (let i = 1; i < posts.length; i++) {
      expect(posts[i - 1].meta.date >= posts[i].meta.date).toBe(true);
    }
  });
});
