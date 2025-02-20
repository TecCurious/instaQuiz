export interface Feature {
    title: string;
    description: string;
  }
  
  export interface Category {
    name: string;
    description: string;
  }
  
  export interface ProgressStats {
    quizzesCompleted: number;
    averageScore: number;
  }


 export interface CustomAlertDialogProps {
    trigger: React.ReactNode;
    title: string;
    description?: string;
    onConfirm: () => void;
    confirmText?: string;
    cancelText?: string;
  }

  export interface Question {
    question: string;
    options?: string[];
    answer: string | number;
  }
  
  export interface Score {
    correct: number;
    wrong: number;
  }

  export interface QuizResult {
    right: number;
    wrong: number;
    notAttempted: number;
    timestamp?: string;
    id?: number;
  }
  