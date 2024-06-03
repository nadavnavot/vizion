import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faPiggyBank,
  faBullseye,
  faBuildingColumns,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Budget = () => {
  const budgetItems = [
    {
      name: "Groceries",
      spent: 226,
      total: 200,
      icon: faChartColumn,
      color: "bg-green-500",
    },
    {
      name: "Bills",
      spent: 43,
      total: 100,
      icon: faPiggyBank,
      color: "bg-red-500",
    },
    {
      name: "Transportation",
      spent: 101,
      total: 120,
      icon: faBullseye,
      color: "bg-blue-500",
    },
    {
      name: "Entertainment",
      spent: 20,
      total: 130,
      icon: faBuildingColumns,
      color: "bg-orange-500",
    },
  ];

  return (
    <div>
      <Title>Budget</Title>
      <div className="space-y-4">
        {budgetItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center p-4 bg-white rounded-lg shadow-md"
          >
            <div
              className={`flex items-center justify-center w-12 h-12 mr-4 rounded-full ${item.color}`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-black" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{item.name}</span>
                <span>
                  <span
                    className={item.spent > item.total ? "text-red-500" : ""}
                  >
                    {item.spent}€
                  </span>{" "}
                  / {item.total}€
                </span>
              </div>
              <div
                className={`w-full h-2 rounded-full bg-gray-200 overflow-hidden`}
              >
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${(item.spent / item.total) * 100}%`,
                    backgroundColor:
                      item.spent > item.total ? "#ED4337" : "#0000004D",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed p-2 text-white bg-navy-blue rounded-full shadow-lg bottom-40 right-8">
        <FontAwesomeIcon icon={faPlus} />
      </div>

      <Navbar />
    </div>
  );
};

export default Budget;
