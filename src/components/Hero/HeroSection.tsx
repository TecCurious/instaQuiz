import ProgressCard from './ProgressCard';
import { ProgressStats } from '@/types/quize';
import Link from 'next/link';


interface HeroSectionProps {
  stats: ProgressStats;
}

const HeroSection = ({ stats }: HeroSectionProps) => {
  

 


  return (
    <section className="bg-yellow-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Test Your Knowledge with Interactive Quizzes
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Challenge yourself, track your progress, and compete with others in various topics.
            </p>
           <Link href={"/instruction"}> <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center ml-24 md:ml-0">
              Get Started
            </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <ProgressCard stats={stats} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
