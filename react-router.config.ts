import type { Config } from '@react-router/dev/config';
import { getAllSlugPaths } from './app/posts/posts';

export default {
  ssr: false,
  async prerender({ getStaticPaths }) {
    const staticPaths = getStaticPaths();
    return [...staticPaths, ...getAllSlugPaths()];
  },
} satisfies Config;
