import React from 'react';
import { Input } from '@/components/ui/input';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';


interface NumericalInputProps {
  value: string | number;
  isAnswered: boolean;
  correctAnswer: number;
  setAnswer: (value: number | string) => void;
  setValue: React.Dispatch<React.SetStateAction<number | string>>;
}

export const NumericalInput: React.FC<NumericalInputProps> = ({
  value,
  setValue,
  isAnswered,
  correctAnswer,
   setAnswer,
}) =>  { 
  

  
  return (
  <div className="space-y-4">
    <div className='flex gap-4 items-center justify-center'>

    
    <Input
      type="number"
      placeholder="Enter your answer"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      disabled={isAnswered}
      className="text-lg p-6 w-1/2"
    />
    <Button onClick={()=>{setAnswer(value)}} className='bg-green-500 hover:bg-green-600'>Enter</Button>
    </div>
    {isAnswered && (
      <div className={`p-4 rounded-lg flex items-center gap-3 ${
        value === correctAnswer ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      }`}>
        {value === correctAnswer ? (
          <CheckCircle className="w-5 h-5" />
        ) : (
          <AlertCircle className="w-5 h-5" />
        )}
        <span>Correct answer: {correctAnswer}</span>
      </div>
    )}
  </div>
);
}