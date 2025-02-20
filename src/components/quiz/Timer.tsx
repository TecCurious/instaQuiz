import React from 'react';
import { Timer as TimerIcon } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
}

export const QuizTimer: React.FC<TimerProps> = ({ timeLeft }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
    <TimerIcon className="w-4 h-4" />
    <span className="font-medium">{timeLeft}s</span>
  </div>
);