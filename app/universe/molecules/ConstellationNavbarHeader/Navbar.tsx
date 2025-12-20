import React from 'react';
import { Link } from 'react-router';

type NavbarLinks = {
  name: string;
  href: ConstellationHeaderLinks;
};

type NavbarProps = {
  activeLink: ConstellationHeaderLinks;
  setActiveLink: React.Dispatch<React.SetStateAction<ConstellationHeaderLinks>>;
  setHoveredLink: React.Dispatch<
    React.SetStateAction<ConstellationHeaderLinks | null>
  >;
};

const links: NavbarLinks[] = [
  { name: 'About Me', href: '/about-me' },
  { name: 'Experience', href: '/experience' },
  { name: 'Blog', href: '/blog' },
  { name: 'Skills', href: '/skills' },
];

export default function Navbar({ activeLink, setHoveredLink }: NavbarProps) {
  return (
    <nav className="fixed top-8 w-full z-20">
      <ul className="flex items-center justify-evenly">
        {links.map((link, i) => (
          <React.Fragment key={link.href}>
            <li>
              <Link
                to={link.href}
                className={`text-white hover:text-gray-300 transition-colors ${
                  activeLink === link.href ? 'underline underline-offset-4' : ''
                }`}
                onMouseOver={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
              </Link>
            </li>
            {i < links.length - 1 && (
              <span
                className="text-white select-none scale-y-150"
                aria-hidden="true"
              >
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
