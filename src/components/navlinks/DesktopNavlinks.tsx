import Link from 'next/link';
import { NavLink } from '@/types/nav';

interface DesktopNavLinksProps {
  links: NavLink[];
}

const DesktopNavLinks = ({ links }: DesktopNavLinksProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default DesktopNavLinks;