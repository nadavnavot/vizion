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
      const response = await fetch("/api/submit-budget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Budget submitted successfully");
      } else {
        console.error("Error submitting budget");
      }
    } catch (error) {
      console.error("Error submitting budget:", error);
    }
  };

  return (
    <div>
      <Subtitle>Done</Subtitle>
      <h1>The budget has been added with the following details:</h1>
      <div>Category: {category}</div>
      <div>Budget: €{budget}</div>
      <div>Accounts: {accounts.join(", ")}</div>
      <div>Description: {description}</div>
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
