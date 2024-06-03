import React from "react";
import Subtitle from "../../../components/ui/subtitle";
import Image from "next/image";

const StepDone = ({ category, budget }: any) => {
  return (
    <div>
      <Subtitle>Done</Subtitle>
      <h1>
        The budget of {budget}€ for {category} has been added successfully
      </h1>
      <Image src="/checkmark.png" width={50} height={50} alt="Success" />
    </div>
  );
};

export default StepDone;
