import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import StepCategory from "./StepCategory";
import StepAmount from "./StepAmount";
import StepAccounts from "./StepAccounts";
import StepDescription from "./StepDescription";
import StepDone from "./StepDone";

function ProgressBar() {
  const [currentStep, setCurrentStep] = useState(0);
  const [budget, setBudget] = useState(60);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleBudgetChange = (newValue: number[]) => {
    setBudget(newValue[0]);
  };

  const steps = [
    {
      title: "category",
      content: (
        <StepCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ),
    },
    {
      title: "amount",
      content: (
        <StepAmount budget={budget} onBudgetChange={handleBudgetChange} />
      ),
    },
    {
      title: "accounts",
      content: (
        <StepAccounts
          selectedAccounts={selectedAccounts}
          setSelectedAccounts={setSelectedAccounts}
        />
      ),
    },
    {
      title: "description",
      content: (
        <StepDescription
          description={description}
          setDescription={setDescription}
        />
      ),
    },
    {
      title: "done",
      content: (
        <StepDone
          category={selectedCategory}
          budget={budget}
          accounts={selectedAccounts}
          description={description}
        />
      ),
    },
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
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-navy-blue text-white rounded-md disabled:bg-gray-300 disabled:text-gray-500"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
