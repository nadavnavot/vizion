import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import StepCategory from "@/app/budget/create/StepCategory";
import StepAmount from "@/app/budget/create/StepAmount";
import StepAccounts from "@/app/budget/create/StepAccounts";
import StepDescription from "@/app/budget/create/StepDescription";
import StepDone from "@/app/budget/create/StepDone";

function ProgressBar() {
  const [currentStep, setCurrentStep] = useState(0);
  const [budget, setBudget] = useState(60);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleBudgetChange = (newValue: number[]) => {
    setBudget(newValue[0]);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsCategorySelected(true);
  };

  const steps = [
    {
      title: "category",
      content: (
        <StepCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategorySelect}
        />
      ),
    },
    {
      title: "amount",
      content: (
        <StepAmount budget={budget} onBudgetChange={handleBudgetChange} />
      ),
    },
    { title: "accounts", content: <StepAccounts /> },
    { title: "description", content: <StepDescription /> },
    { title: "done", content: <StepDone /> },
  ];

  return (
    <div>
      <div className="flex justify-between mb-4">
        {steps.map((_, index) => (
          <div
            key={index}
            className={cn(
              "text-center w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800",
              {
                "bg-blue-500 text-white": index === currentStep,
                "bg-gray-200 dark:bg-gray-600": index !== currentStep,
              }
            )}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <Progress value={(currentStep + 1) * (100 / steps.length)} />
      <div className="mt-4">{steps[currentStep].content}</div>
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-navy-blue text-white rounded-md disabled:bg-gray-300 disabled:text-gray-500"
        >
          Back
        </button>
        {currentStep < steps.length - 1 && (
          <button
            onClick={handleNext}
            disabled={!isCategorySelected} // Disable if no category selected
            className={`px-4 py-2 bg-navy-blue text-white rounded-md ${
              !isCategorySelected && "opacity-50 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
