import Link from 'next/link';
import { NavLink } from '@/types/nav';
import { FaTimes } from 'react-icons/fa';

interface MobileNavLinksProps {
  links: NavLink[];
  isOpen: boolean;
  onLinkClick: () => void;
}

const MobileNavLinks = ({ links, isOpen, onLinkClick }: MobileNavLinksProps) => {
  return (
    <div 
      className={`
        fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      {/* Close button at the top */}
      <div className="flex justify-end p-4">
        <button
          onClick={onLinkClick}
          className="text-gray-700 hover:text-yellow-500"
        >
          <FaTimes className="h-6 w-6" />
        </button>
      </div>

      {/* Links with padding and spacing */}
      <div className="px-4 py-2 space-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            onClick={onLinkClick}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavLinks;