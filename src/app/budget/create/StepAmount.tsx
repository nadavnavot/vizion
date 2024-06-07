"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";
import Subtitle from "@/components/ui/subtitle";

const StepAmount = ({
  budget,
  onBudgetChange,
}: {
  budget: number;
  onBudgetChange: (newValue: number[]) => void;
}) => {
  return (
    <div>
      <Subtitle>Set budget amount</Subtitle>
      <div className="mt-12">
        <Slider
          defaultValue={[budget]}
          max={400}
          min={0}
          step={10}
          onValueChange={onBudgetChange}
        />
      </div>
      <div className="mt-4 text-2xl font-medium flex items-center justify-center mt-32 text-navy-blue">
        Selected Amount: €{budget}
      </div>
    </div>
  );
};

export default StepAmount;
