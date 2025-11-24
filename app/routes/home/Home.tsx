import HomeBackground from '~/universe/atoms/HomeBackground';
import type { Route } from './+types/Home';
import { Outlet, useLocation, type Location } from 'react-router';
import { useRef, useEffect } from 'react';
import HomeIntro from '~/universe/atoms/HomeIntro';
import ConstellationNavbarHeader from '~/universe/molecules/ConstellationNavbarHeader';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'btja.me' },
    { name: 'Home page', content: 'Welcome to my profile!' },
  ];
}

export default function Home() {
  const location: Location = useLocation();
  const outletRef: React.RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outletRendered: boolean = outletRef.current?.innerHTML !== '';
    if (outletRendered) {
      outletRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <>
      <HomeBackground />
      <main className="absolute flex flex-col w-full overflow-x-hidden pb-50">
        <div className="relative h-180 mt-30">
          <div className="sm:absolute sm:top-10 sm:left-50 sm:z-0">
            <HomeIntro />
          </div>
          <div className="absolute sm:top-0 top-10 left-0 w-full h-full">
            <ConstellationNavbarHeader />
          </div>
        </div>
        <section
          className="flex justify-center items-center flex-col w-full mt-30"
          ref={outletRef}
        >
          <Outlet />
        </section>
      </main>
    </>
  );
}
