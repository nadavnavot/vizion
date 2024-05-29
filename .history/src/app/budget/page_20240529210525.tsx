import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faPiggyBank,
  faBullseye,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Budget = () => {
  const budgetItems = [
    {
      name: "Groceries",
      spent: 226,
      total: 200,
      icon: "shopping-basket",
      color: "bg-green-500",
    },
    {
      name: "Bills",
      spent: 43,
      total: 100,
      icon: "file-invoice-dollar",
      color: "bg-red-500",
    },
    {
      name: "Transportation",
      spent: 101,
      total: 120,
      icon: "bus",
      color: "bg-blue-500",
    },
    {
      name: "Entertainment",
      spent: 20,
      total: 130,
      icon: "film",
      color: "bg-orange-500",
    },
  ];

  return (
    <div>
      <Title>Budget</Title>
      <div className="flex items-center">
        <span className="mr-2">🕑</span>
        <span>12/30 days</span>
      </div>
      <div className="space-y-4">
        {budgetItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center p-4 bg-white rounded-lg shadow-md"
          >
            <div
              className="flex items-center justify-center w-12 h-12 mr-4 rounded-full"
              style={{ backgroundColor: item.color }}
            >
              <i className={`fas fa-${item.icon} text-white`}></i>
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{item.name}</span>
                <span>
                  {item.spent}€ / {item.total}€
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${(item.spent / item.total) * 100}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="fixed p-4 text-white bg-blue-500 rounded-full shadow-lg bottom-10 right-10">
        <i className="fas fa-plus"></i>
      </button>
      <Navbar />
    </div>
  );
};

export default Budget;
