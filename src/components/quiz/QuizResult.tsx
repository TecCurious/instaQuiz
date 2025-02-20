import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';
import { VscQuestion } from "react-icons/vsc";
import { Score } from '@/types/quize';
import { Button } from '../ui/button';
import Link from 'next/link';


interface QuizResultsProps {
  score: Score;
  totalQuestions: number;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions}) => {
  const handleReset = () => {
    window.location.reload();
  }
  
  const notAttempted = totalQuestions - (score.wrong + score.correct);
  
 


  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Quiz Complete! 🎉</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 rounded-lg bg-green-50 space-y-2">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-medium">Correct Answers</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">{score.correct}</p>
            <p className="text-sm text-green-600">
              {Math.round((score.correct / totalQuestions) * 100)}% accuracy
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-red-50 space-y-2">
            <div className="flex items-center gap-3">
              <XCircle className="w-6 h-6 text-red-500" />
              <h3 className="text-lg font-medium">Wrong Answers</h3>
            </div>
            <p className="text-3xl font-bold text-red-600">{score.wrong}</p>
            <p className="text-sm text-red-600">
              {Math.round((score.wrong / totalQuestions) * 100)}% incorrect
            </p>
          </div>
          {notAttempted > 0 && (
            <div className="p-6 rounded-lg bg-blue-50 space-y-2">
              <div className="flex items-center gap-3">
                <VscQuestion className="w-6 h-6 text-blue-500" />
                <h3 className="text-lg font-medium">Not Attempted</h3>
              </div>
              <p className="text-3xl font-bold text-blue-500">{notAttempted}</p>
            </div>
          )}
        </div>
        <div className='flex gap-6 items-center justify-center'>
          <Link href='/'>
            <Button className='bg-yellow-500 hover:bg-yellow-600'>Home</Button>
          </Link>
          <Button onClick={handleReset} className='bg-green-400 hover:bg-green-500'>Restart</Button>
        </div>
      </CardContent>
    </Card>
  );
}