import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { QuizTimer } from './Timer';

interface QuestionHeaderProps {
  currentIndex: number;
  totalQuestions: number;
  timeLeft: number;
}

export const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  currentIndex,
  totalQuestions,
  timeLeft,
}) => (
  <CardHeader>
    <div className="flex justify-between items-center">
      <CardTitle className="text-xl">
        Question {currentIndex + 1}/{totalQuestions}
      </CardTitle>
      <QuizTimer timeLeft={timeLeft} />
    </div>
  </CardHeader>
);