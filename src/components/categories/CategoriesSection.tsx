import { Category } from '@/types/quize';
import CategoryCard from './CatagoryCard';

interface CategoriesSectionProps {
  categories: Category[];
  onStartQuiz: (category: string) => void;
}

const CategoriesSection = ({ categories, onStartQuiz }: CategoriesSectionProps) => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.name}
              category={category}
              onStart={onStartQuiz}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
