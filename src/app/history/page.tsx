"use client"
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import History from '@/components/history/HIstory'
import { getAllQuizData } from '@/lib/db';
import { useEffect, useState } from 'react';
import { QuizResult } from '@/types/quize';

const Page = () => {

     const [quizData, setQuizData] = useState<QuizResult[]>([]); 
    
      useEffect(() => {   
        getAllQuizData().then((data) => {
          console.log(data);
          setQuizData(data)
        });
      }, []);


  return (
    <div>
      <Navbar/>
      <div>
        <History results={quizData}/>
      </div>
    </div>
  )
}

export default Page
