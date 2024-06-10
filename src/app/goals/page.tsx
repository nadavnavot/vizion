"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import {
  faPlus,
  faUmbrellaBeach,
  faMotorcycle,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Goal = () => {
  const goals = [
    {
      name: "Maldives",
      dueDate: new Date("2024-07-07"),
      spentAmount: 2000,
      totalAmount: 3600,
      icon: faUmbrellaBeach,
      active: true,
    },
    {
      name: "Motorcycle",
      dueDate: new Date("2024-09-05"),
      spentAmount: 11723,
      totalAmount: 15000,
      icon: faMotorcycle,
      active: true,
    },
    {
      name: "MacBook Pro",
      dueDate: new Date("2025-06-06"),
      spentAmount: 1600,
      totalAmount: 1600,
      icon: faLaptop,
      active: false,
    },
  ];

  const getDaysLeft = (dueDate: Date) => {
    const currentDate = new Date();
    const timeDiff = dueDate.getTime() - currentDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const formatAmount = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="p-8 mb-36">
      <Title>Goals</Title>
      <div className="flex flex-col">
        {goals.map((goal, index) => {
          const percentage = (goal.spentAmount / goal.totalAmount) * 100;
          const daysLeft = getDaysLeft(goal.dueDate);

          return (
            <div
              key={index}
              className={`flex flex-col p-4 ${
                goal.active ? "bg-navy-blue" : "bg-gray-400"
              } text-white rounded-lg shadow-md my-4 ${
                index === goals.length - 1 ? "mb-36" : ""
              }`}
            >
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white rounded-full mr-4 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={goal.icon}
                    className="text-navy-blue text-2xl "
                  />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-lg">{goal.name}</span>
                  <div className="text-base">
                    {goal.active
                      ? `${daysLeft} ${daysLeft === 1 ? "day" : "days"} left`
                      : ""}
                  </div>
                </div>
                <div className="w-20 h-36 pt-8">
                  <CircularProgressbar
                    value={percentage}
                    text={`${Math.round(percentage)}%`}
                    styles={buildStyles({
                      textColor: "#FFFFFF",
                      pathColor: percentage > 100 ? "#EEEFEF" : "#60F5D9",
                      trailColor: "#d6d6d6",
                    })}
                  />
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                <span>{goal.active ? "In progress" : "Goal achieved"}</span>
                <div className="text-base flex">
                  <span className="mr-2">
                    {formatAmount(goal.spentAmount)}€
                  </span>
                  <span>/ {formatAmount(goal.totalAmount)}€</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Navbar />
    </div>
  );
};

export default Goal;
