import React from "react";
import Subtitle from "@/components/ui/subtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Category {
  _id: { $oid: string };
  categoryIcon: string | IconDefinition;
  categoryName: string;
}

interface StepCategoryProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (categoryName: string, categoryId: string) => void;
}

const StepCategory = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: StepCategoryProps) => {
  return (
    <div>
      <Subtitle>Choose Category for your budget</Subtitle>
      <div className="flex justify-center items-center h-full mt-8">
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category._id.$oid}
              className="flex flex-col items-center"
              onClick={() =>
                setSelectedCategory(category.categoryName, category._id.$oid)
              }
            >
              <div
                className={`flex justify-center items-center w-16 h-16 rounded-full cursor-pointer ${
                  selectedCategory === category.categoryName
                    ? "bg-blue-500 text-white"
                    : "bg-navy-blue text-white"
                }`}
              >
                <FontAwesomeIcon
                  icon={category.categoryIcon as unknown as IconDefinition}
                />
              </div>
              <label
                className={`mt-2 text-center ${
                  selectedCategory === category.categoryName
                    ? "text-blue-500"
                    : "text-gray-600"
                }`}
              >
                {category.categoryName}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepCategory;
