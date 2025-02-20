import { FaPlay } from 'react-icons/fa';
import { Category } from '@/types/quize';

interface CategoryCardProps {
  category: Category;
  onStart: (category: string) => void;
}

const CategoryCard = ({ category, onStart }: CategoryCardProps) => {
  return (
    <div className="bg-white border border-yellow-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <button 
        onClick={() => onStart(category.name)}
        className="text-yellow-500 hover:text-yellow-600 font-medium flex items-center"
      >
        Start Quiz <FaPlay className="ml-2" />
      </button>
    </div>
  );
};

export default CategoryCard;