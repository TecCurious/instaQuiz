import { CATEGORIES, FEATURES } from '@/constants';
import HeroSection from '@/components/Hero/HeroSection';
import CategoriesSection from '../categories/CategoriesSection';
import FeaturesSection from '../feature/FeatureSection';
import { getAllQuizData } from '@/lib/db';
import { useEffect, useState } from 'react';
import { QuizResult } from '@/types/quize';


const HomeComponent = () => {

  const [quizData, setQuizData] = useState<QuizResult[]>([]); 

  useEffect(() => {   
    getAllQuizData().then((data) => {
      console.log(data);
      setQuizData(data)
    });
  }, []);

  const mockStats = {
    quizzesCompleted:quizData.length || 0,
    averageScore: (quizData.reduce((acc, curr) => acc + Number(curr.right), 0) / quizData.length ) *10 || 0
  };

  const handleStartQuiz = (category: string) => {
    console.log(`Starting quiz for category: ${category}`);
   
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection stats={mockStats} />
      <CategoriesSection 
        categories={CATEGORIES}
        onStartQuiz={handleStartQuiz}
      />
      <FeaturesSection features={FEATURES} />
    </div>
  );
};

export default HomeComponent;