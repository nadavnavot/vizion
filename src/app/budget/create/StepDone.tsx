import React from "react";
import Link from "next/link";

interface StepDoneProps {
  category: string;
  budget: number;
  id: string;
}

const StepDone: React.FC<StepDoneProps> = ({ category, budget, id }) => {
  const handleFinish = async () => {
    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id, active: true, amountTotal: budget }),
      });

      if (!response.ok) {
        throw new Error("Failed to update budget");
      }

      const data = await response.json();
      if (data.success) {
        console.log("Budget updated successfully");
      } else {
        console.error("Error:", data.error);
      }
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <div className="text-2xl text-center mt-48">
        The{" "}
        <span className="text-navy-blue font-bold p-1 rounded">{category}</span>{" "}
        budget of
        <span className="text-navy-blue font-bold p-1 rounded">
          {budget}€
        </span>{" "}
        has been added successfully.
      </div>
      <Link href="/budget">
        <div className="flex items-center justify-center mt-32">
          <button
            className="mt-4 bg-navy-blue text-white py-4 px-12 rounded-md "
            onClick={handleFinish}
          >
            Done
          </button>
        </div>
      </Link>
    </div>
  );
};

export default StepDone;
