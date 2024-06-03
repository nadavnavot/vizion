import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faPiggyBank,
  faBullseye,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Subtitle from "./subtitle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const budgetItems = [
  {
    name: "Groceries",
    spent: 226,
    total: 200,
    icon: faChartColumn,
    color: "bg-green-500",
    colorValue: "#4CAF50", // Equivalent hex value for bg-green-500
  },
  {
    name: "Bills",
    spent: 43,
    total: 100,
    icon: faPiggyBank,
    color: "bg-red-500",
    colorValue: "#F44336", // Equivalent hex value for bg-red-500
  },
  {
    name: "Transportation",
    spent: 101,
    total: 120,
    icon: faBullseye,
    color: "bg-blue-500",
    colorValue: "#2196F3", // Equivalent hex value for bg-blue-500
  },
  {
    name: "Entertainment",
    spent: 20,
    total: 130,
    icon: faBuildingColumns,
    color: "bg-orange-500",
    colorValue: "#FF9800", // Equivalent hex value for bg-orange-500
  },
];

const BudgetCarousel = () => (
  <div>
    <Subtitle>Budget</Subtitle>
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {budgetItems.map((item, index) => {
          const percentage = Math.min((item.spent / item.total) * 100, 100);
          return (
            <CarouselItem key={index}>
              <Card className="w-full h-64">
                <CardContent className="flex flex-col justify-between p-4 bg-navy-blue rounded-lg shadow-md w-full h-full">
                  <div className="flex items-center mt-6">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white">
                      <FontAwesomeIcon
                        className="h-8 text-navy-blue"
                        icon={item.icon}
                      />
                    </div>
                    <div className="ml-4 text-2xl text-white">{item.name}</div>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <div className="w-24 h-24">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage.toFixed(1)}%`}
                        styles={buildStyles({
                          textColor: "#fff",
                          pathColor:
                            item.spent > item.total
                              ? "#ED4337"
                              : item.colorValue,
                          trailColor: "#d6d6d6",
                        })}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-white">
                    <span
                      className={
                        item.spent > item.total ? "text-red-500" : "text-white"
                      }
                    >
                      {item.spent}€
                    </span>
                    <span>{item.total}€</span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

export default BudgetCarousel;
