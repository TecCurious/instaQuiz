import React from 'react';
import { Button } from '@/components/ui/button';

interface MultipleChoiceOptionsProps {
  options: string[];
  selectedAnswer: string | number;
  isAnswered: boolean;
  correctAnswer: string | number;
  onSelect: (answer: string) => void;
}

export const MultipleChoiceOptions: React.FC<MultipleChoiceOptionsProps> = ({
  options,
  selectedAnswer,
  isAnswered,
  correctAnswer,
  onSelect,
}) => (
  <div className="grid gap-3">
    {options.map((option, index) => {
      const isCorrect = isAnswered && option === correctAnswer;
      const isWrong = isAnswered && option === selectedAnswer && option !== correctAnswer;
      
      return (
        <Button
          key={index}
          className={`
            p-6 text-left justify-start h-auto
            ${isCorrect ? 'bg-green-500 hover:bg-green-600 text-white' : ''}
            ${isWrong ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
          `}
          onClick={() => !isAnswered && onSelect(option)}
          variant={selectedAnswer === option ? 'default' : 'outline'}
          disabled={isAnswered}
        >
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center">
              {String.fromCharCode(65 + index)}
            </div>
            <span className="text-base">{option}</span>
          </div>
        </Button>
      );
    })}
  </div>
);
