import React, { useState } from "react";
import Subtitle from "@/components/ui/subtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faFilm,
  faUtensils,
  faPlaneDeparture,
  faCartShopping,
  faBasketShopping,
  faArrowRightArrowLeft,
  faBus,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { icon: faReceipt, value: "Bills" },
  { icon: faFilm, value: "Entertainment" },
  { icon: faUtensils, value: "Restaurants" },
  { icon: faPlaneDeparture, value: "Travel" },
  { icon: faCartShopping, value: "Shopping" },
  { icon: faBasketShopping, value: "Groceries" },
  { icon: faArrowRightArrowLeft, value: "Transfers" },
  { icon: faBus, value: "Transportation" },
];

const StepCategory = ({
  selectedCategory,
  setSelectedCategory,
  onNext,
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onNext: () => void;
}) => {
  const handleNext = () => {
    if (selectedCategory) {
      onNext();
    } else {
      alert("Please choose a category before proceeding.");
    }
  };

  return (
    <div>
      <Subtitle>Choose Category</Subtitle>
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              onClick={() => setSelectedCategory(category.value)}
            >
              <div
                className={`flex justify-center items-center w-16 h-16 rounded-full cursor-pointer ${
                  selectedCategory === category.value
                    ? "bg-blue-500 text-white"
                    : "bg-navy-blue text-white"
                }`}
              >
                <FontAwesomeIcon icon={category.icon} />
              </div>
              <label
                className={`mt-2 text-center ${
                  selectedCategory === category.value
                    ? "text-blue-500"
                    : "text-gray-600"
                }`}
              >
                {category.value}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-navy-blue text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepCategory;
