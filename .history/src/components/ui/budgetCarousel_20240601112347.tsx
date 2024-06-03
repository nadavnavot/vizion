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

const BudgetCarousel = () => (
  <div>
    <Subtitle>Budget</Subtitle>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {budgetItems.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="w-full h-64">
                <CardContent className="flex flex-col justify-center p-4 bg-white rounded-lg shadow-md w-full h-full">
                  <div
                    className={`flex items-center justify-center w-12 h-12 mb-4 rounded-full ${item.color}`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-black" />
                  </div>
                  <div className="">
                    <div className="">
                      <span className="font-medium">{item.name}</span>
                      <span>
                        <span
                          className={
                            item.spent > item.total ? "text-red-500" : ""
                          }
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
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

export default BudgetCarousel;
