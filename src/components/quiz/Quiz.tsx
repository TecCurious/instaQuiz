import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QuestionHeader } from './QuestionHeader';
import { MultipleChoiceOptions } from './MultipleChoiceoption';
import { NumericalInput } from './NumericalInput';
import { QuizResults } from './QuizResult';
import questions from '@/lib/Questions';
import { Score, Question } from '@/types/quize';
import { addQuizData } from '@/lib/db';

export const QuizCard = () => {
  const [Questions] = useState<Question[]>(questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState<Score>({ correct: 0, wrong: 0 });
  const [quizEnded, setQuizEnded] = useState(false);
  const [inpt, setInpt] = useState<string | number>('');
  const [count, setCount ] = useState<number>(0);
  useEffect(() => {
    if (timeLeft > 0 && !isAnswered && !quizEnded) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleNext();
    }
  }, [timeLeft, isAnswered]);

  const handleAnswerSelect = (answer: string | number) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore(prev => ({ ...prev, wrong: prev.wrong + 1 }));
    }
  };


  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
      setInpt('');
      setTimeLeft(30);
    } else {
      if (!quizEnded) {
        addQuizData({
          right: score.correct, 
          wrong: score.wrong,
          notAttempted: questions.length - (score.correct + score.wrong)    
        })
          .then(id => console.log(`Quiz data saved with ID: ${id}`))  
          .catch(err => console.error(`Error saving quiz data: ${err}`));
        setQuizEnded(true);
      }
    }
  };

  if (quizEnded) {
    console.log("rendering quiz results");
    return <QuizResults score={score} totalQuestions={questions.length} count={count} setCount={setCount}/>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <QuestionHeader 
        currentIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        timeLeft={timeLeft}
      />
      
      <CardContent className="space-y-6">
        <p className="text-lg md:text-xl font-medium">{currentQuestion.question}</p>
        
        {currentQuestion.options ? (
          <MultipleChoiceOptions
            options={currentQuestion.options}
            selectedAnswer={selectedAnswer}
            isAnswered={isAnswered}
            correctAnswer={currentQuestion.answer}
            onSelect={handleAnswerSelect}
          />
        ) : (
          <NumericalInput
            value={inpt}
            isAnswered={isAnswered}
            correctAnswer={currentQuestion.answer as number}
            setAnswer={handleAnswerSelect}
            setValue={setInpt}
          />
        )}
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button
          onClick={handleNext}
          disabled={!isAnswered}
          size="lg"
          className="w-full sm:w-auto"
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;