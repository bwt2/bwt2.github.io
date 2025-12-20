import type { PostMeta } from './posts';

export const meta: PostMeta = {
  title: 'Hello World',
  date: '2025-12-20',
  description: 'Blog beta test',
};

export default function Post() {
  return (
    <>
      <p>Hey, you're not supposed to see this!</p>
    </>
  );
}
