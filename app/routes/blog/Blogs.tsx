import { Link, useLoaderData, useRouteError } from 'react-router';
import { loadAllMeta } from '~/posts/posts';

export async function loader() {
  const posts = await loadAllMeta();
  return { posts };
}

export default function Blogs() {
  const { posts } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <main className="ml-5 mr-5 flex flex-col sm:max-w-1/3 max-w-none">
      <h1 className="text-white font-bold text-5xl mb-10 self-center">Blogs</h1>

      <ul className="text-white list-none">
        {posts.map(({ slug, meta }) => (
          <li key={slug} className="mb-10">
            <h2 className="font-semibold text-xl flex underline">
              <Link to={`/blog/${slug}`}>{meta.title}</Link>
            </h2>

            <div className="text-gray-400 text-sm">
              {new Date(meta.date).toLocaleDateString()}
            </div>

            {meta.description && (
              <p className="text-gray-400 text-sm">{meta.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export function ErrorBoundary() {
  const err = useRouteError();
  console.log(err);

  return (
    <main className="flex flex-col w-screen justify-center items-center">
      <h1 className="text-white font-bold text-5xl mb-10">
        Something went wrong
      </h1>
      <Link
        to="/blog"
        className="text-white text-2xl mb-20 font-light underline"
      >
        Back to Home
      </Link>
    </main>
  );
}
