"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Instruction from "@/components/quiz/Instruction";
import { Button } from "@/components/ui/button";
import CustomAlertDialog from "@/components/alert/AlertComponent";
import { useRouter } from "next/navigation";
import { FaPlay } from 'react-icons/fa';
const page = () => {

  const router = useRouter(); 

  const handleConfirm = () => {
    console.log("Confirmed!");
    console.log("Quiz started");
    router.push("/quiz");

  };


  return (
    <div>
      <Navbar />

      <div className="mt-4 sm:mx-0 mx-4">
        <Instruction />
        <div className="flex items-center justify-center mt-6 ">
          <CustomAlertDialog
            trigger={
              <Button className="bg-yellow-500 hover:bg-yellow-600">
                <FaPlay className="mr-2" /> 
                Start Quize
              </Button>
            }
            title="Are you sure? To start the quiz"
            onConfirm={handleConfirm}
            confirmText="Yes"
            cancelText="cancel"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
