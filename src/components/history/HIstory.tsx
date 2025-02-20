import React from "react";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";
import { QuizResult } from "@/types/quize";

interface QuizResultsCardProps {
  results: QuizResult[];
}

const History: React.FC<QuizResultsCardProps> = ({ results }) => {
  if (results.length < 1) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Your Quiz Attempts
        </h2>
        <p className="font-semibold ml-5 text-red-500">
          You not Attempted any Quiz
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Your Quiz Attempts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result, index) => (
          <div
            key={result.id || index}
            className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-yellow-400 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-yellow-50 p-3 flex justify-between items-center">
              <h3 className="font-semibold text-lg text-gray-800">
                Attempt {index + 1}
              </h3>
              {result.timestamp && (
                <span className="text-xs text-gray-500">
                  {new Date(result.timestamp).toLocaleDateString()}
                </span>
              )}
            </div>

            <div className="p-4">
              <div className="grid grid-cols-3 gap-2 mb-4">
                <ResultMetric
                  count={result.right}
                  label="Correct"
                  icon={<CheckCircle className="w-5 h-5 text-green-500" />}
                  bgColor="bg-green-50"
                />
                <ResultMetric
                  count={result.wrong}
                  label="Wrong"
                  icon={<XCircle className="w-5 h-5 text-red-500" />}
                  bgColor="bg-red-50"
                />
                <ResultMetric
                  count={result.notAttempted}
                  label="Skipped"
                  icon={<HelpCircle className="w-5 h-5 text-blue-500" />}
                  bgColor="bg-blue-50"
                />
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">
                  <span className="text-gray-600">Total Questions: </span>
                  <span className="text-gray-800">
                    {result.right + result.wrong + result.notAttempted}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ResultMetricProps {
  count: number;
  label: string;
  icon: React.ReactNode;
  bgColor: string;
}

const ResultMetric: React.FC<ResultMetricProps> = ({
  count,
  label,
  icon,
  bgColor,
}) => {
  return (
    <div
      className={`${bgColor} rounded-lg p-2 flex flex-col items-center justify-center`}
    >
      <div className="flex items-center gap-1 mb-1">{icon}</div>
      <span className="text-lg font-bold text-gray-800">{count}</span>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );
};

export default History;
