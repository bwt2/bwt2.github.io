import { Link } from 'react-router';
import HomeBackground from '~/universe/atoms/HomeBackground';

export default function Error() {
  return (
    <>
      <HomeBackground />
      <main className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-white font-bold text-5xl mb-10">Page not found</h1>
        <Link to="/" className="text-white text-2xl mb-20 font-light underline">
          Back to Home
        </Link>
      </main>
    </>
  );
}
