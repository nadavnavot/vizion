"use client";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import StepCategory from "@/app/budget/create/StepCategory";
import StepAmount from "@/app/budget/create/StepAmount";
import StepAccounts from "@/app/budget/create/StepAccounts";
import StepDescription from "@/app/budget/create/StepDescription";
import StepDone from "@/app/budget/create/StepDone";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faFilm,
  faUtensils,
  faPlaneDeparture,
  faCartShopping,
  faBasketShopping,
  faRightLeft,
  faBus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const categoriesData = [
  {
    _id: {
      $oid: "665de334dcda1ec1ae28131b",
    },
    categoryIcon: faReceipt,
    categoryName: "Bills",
  },
  {
    _id: {
      $oid: "665de581dcda1ec1ae281320",
    },
    categoryIcon: faFilm,
    categoryName: "Entertainment\n",
  },
  {
    _id: {
      $oid: "665de58ddcda1ec1ae281321",
    },
    categoryColor: "#F0C861",
    categoryIcon: faUtensils,
    categoryName: "Restaurants\n",
  },
  {
    _id: {
      $oid: "665de593dcda1ec1ae281322",
    },
    categoryColor: "#06AED5",
    categoryIcon: faPlaneDeparture,
    categoryName: "Travel",
  },
  {
    _id: {
      $oid: "665de596dcda1ec1ae281323",
    },
    categoryColor: "#F896D8",
    categoryIcon: faCartShopping,
    categoryName: "Shopping",
  },
  {
    _id: {
      $oid: "665de599dcda1ec1ae281324",
    },
    categoryColor: "#C1DD85",
    categoryIcon: faBasketShopping,
    categoryName: "Groceries",
  },
  {
    _id: {
      $oid: "665de59bdcda1ec1ae281325",
    },
    categoryColor: "#499167",
    categoryIcon: faRightLeft,
    categoryName: "Transfers",
  },
  {
    _id: {
      $oid: "665de59ddcda1ec1ae281326",
    },
    categoryColor: "#007EA7",
    categoryIcon: faBus,
    categoryName: "Transportation",
  },
];

function ProgressBar() {
  const [currentStep, setCurrentStep] = useState(0);
  const [budget, setBudget] = useState(60);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const handleCategorySelect = (categoryName: string, categoryId: string) => {
    setSelectedCategory(categoryName);
    setSelectedCategoryId(categoryId);
  };

  const handleNext = () => {
    if (currentStep === 0 && selectedCategory === "") {
      setErrorMessage("Please select a category.");
      return;
    }
    setErrorMessage("");
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    if (currentStep === 0) {
      window.location.href = "/budget";
    } else {
      setErrorMessage("");
      setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    }
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
          setSelectedCategory={(categoryName, categoryId) =>
            handleCategorySelect(categoryName, categoryId)
          }
          categories={categoriesData}
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
          id={selectedCategoryId}
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
      {errorMessage && (
        <div className="text-red-500 text-center my-4">{errorMessage}</div>
      )}
      <div className="fixed bottom-0 left-0 right-0 mb-8 mx-8 flex justify-between p-4 bg-white">
        {currentStep !== steps.length - 1 && (
          <Button
            onClick={handleBack}
            className="px-8 py-2 bg-navy-blue text-white rounded-md disabled:bg-gray-300 disabled:text-gray-500"
          >
            Back
          </Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button
            onClick={handleNext}
            className="px-8 py-2 bg-navy-blue text-white rounded-md"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
