import React from "react";
import Subtitle from "../../../components/ui/subtitle";
import { Slider } from "../../../components/ui/slider";

const StepAmount = ({
  budget,
  onBudgetChange,
}: {
  budget: number;
  onBudgetChange: (value: number[]) => void;
}) => (
  <div>
    <Subtitle>Choose Budget Amount</Subtitle>

    <Slider
      value={[budget]}
      onValueChange={onBudgetChange}
      min={0}
      max={100}
      step={1}
      aria-labelledby="budget-slider"
    />
    <div>Budget: €{budget}</div>
  </div>
);

export default StepAmount;
