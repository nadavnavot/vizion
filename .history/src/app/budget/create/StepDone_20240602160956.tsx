import React from "react";
import Subtitle from "../../../components/ui/subtitle";
import Image from "next/image";

const StepDone = ({ category, budget, accounts, description }: any) => {
  const handlePost = async () => {
    const data = {
      category,
      budget,
      accounts,
      description,
    };

    try {
      // Mock API call
      console.log("Mock API call:", data);
    } catch (error) {
      console.error("Error submitting budget:", error);
    }
  };

  return (
    <div>
      <Subtitle>Done</Subtitle>
      <h1>
        The budget of {budget}€ for {category} has been added successfully
      </h1>
      <button
        onClick={handlePost}
        className="px-4 py-2 bg-navy-blue text-white rounded-md"
      >
        Submit
      </button>
      <Image src="/checkmark.png" width={50} height={50} alt="Success" />
    </div>
  );
};

export default StepDone;
