import { FaBars, FaTimes } from 'react-icons/fa';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 focus:outline-none"
    >
      {isOpen ? (
        <FaTimes className="h-6 w-6" />
      ) : (
        <FaBars className="h-6 w-6" />
      )}
    </button>
  );
};

export default MobileMenuButton;