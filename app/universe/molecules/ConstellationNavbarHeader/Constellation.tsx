import { starData, starLineData } from './starLayout';
import Star from './Star';
import ConstellationLine from './ConstellationLine';
import { useRef, useState } from 'react';

type ConstellationProps = {
  activeLink: ConstellationHeaderLinks;
  hoveredLink: ConstellationHeaderLinks | null;
};

type StarLink = {
  order: number;
  star: string;
  text: string;
  href: ConstellationHeaderLinks;
};

const links: StarLink[] = [
  { order: 1, star: 'epsilon', text: 'About Me', href: '/about-me' },
  { order: 2, star: 'regulus', text: 'Experience', href: '/experience' },
  { order: 3, star: 'denebola', text: 'Projects', href: '/projects' },
  { order: 4, star: 'delta', text: 'Skills', href: '/skills' },
  { order: 5, star: 'gamma', text: 'Blog', href: '/blog' },
];

export default function Constellation({
  activeLink,
  hoveredLink,
}: ConstellationProps) {
  const starRefs = useRef<StarRef>({});
  const svgRef = useRef<SVGSVGElement>(null);
  const [svgReady, setSvgReady] = useState(false); // TODO: fix hack

  return (
    <section className="absolute w-full h-full">
      {starData.map((data, i) => {
        const link: StarLink | undefined = links.find(
          (l) => l.star === data.star,
        );
        return (
          <Star
            key={i}
            top={data.top}
            left={data.left}
            href={link?.href}
            order={link?.order}
            text={link?.text}
            activeLink={activeLink}
            hoveredLink={hoveredLink}
            ref={(e: HTMLDivElement) => {
              starRefs.current[data.star] = e;
            }}
          />
        );
      })}
      <svg
        ref={(node) => {
          svgRef.current = node;
          setSvgReady(!!node);
        }}
        className="absolute inset-0 select-none h-full w-full"
        aria-hidden
      >
        {svgReady &&
          starLineData.map((data) => {
            const head = starRefs.current[data.head];
            const tail = starRefs.current[data.tail];
            const svgElem = svgRef.current;
            return (
              svgElem && (
                <ConstellationLine
                  key={`${data.head}${data.tail}`}
                  headElem={head}
                  tailElem={tail}
                  svgElem={svgElem}
                />
              )
            );
          })}
      </svg>
    </section>
  );
}
