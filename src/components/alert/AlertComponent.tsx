"use client"
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { CustomAlertDialogProps } from '@/types/quize';


const CustomAlertDialog: React.FC<CustomAlertDialogProps> = ({
  trigger,
  title,
  description,
  onConfirm,
  confirmText = 'OK',
  cancelText = 'Cancel'
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[95%] sm:max-w-[425px] rounded-lg mx-auto">
        <AlertDialogHeader className="space-y-2 sm:space-y-4">
          <AlertDialogTitle className="text-lg sm:text-xl font-semibold">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm sm:text-base">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
          <AlertDialogCancel className="mt-2 sm:mt-0 w-full sm:w-auto">
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={onConfirm}
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600"
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};


export default CustomAlertDialog;