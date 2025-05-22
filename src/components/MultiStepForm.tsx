'use client';

import { useState, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Step {
  title: string;
  content: ReactNode;
}

interface MultiStepFormProps {
  steps: Step[];
  onComplete: () => void;
}

export function MultiStepForm({ steps, onComplete }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className='space-y-8'>
      <div className='space-y-2'>
        <h2 className='text-base md:text-2xl font-semibold'>
          {steps[currentStep].title}
        </h2>
        <div className='flex space-x-2'>
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-full rounded-full ${
                index <= currentStep ? 'bg-primary' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {steps[currentStep].content}

      <div className='flex justify-between'>
        {currentStep > 0 && (
          <Button onClick={handlePrevious} variant='outline'>
            Previous
          </Button>
        )}
        <Button onClick={handleNext} className='ml-auto'>
          {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
