"use client"
import React from "react";
import { Clock, ListChecks, Calculator, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const Instruction = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500">
        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
          <ListChecks className="h-6 w-6" />
          Quiz Instructions
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Calculator className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Questions</h3>
              <p className="text-gray-600">
                This quiz consists of 10 questions, including multiple-choice and numerical answers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Time Limit</h3>
              <p className="text-gray-600">
                You have <span className="font-medium text-yellow-600">30 seconds</span> to answer each question.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <ArrowRight className="h-5 w-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Navigation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Select the best answer for multiple-choice questions</li>
                <li>• Enter clear numerical answers for integer-type questions</li>
                <li>• Click Next to proceed to the following question</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Instruction;