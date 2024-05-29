import React from "react";
import { Card, CardContent } from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Title from "./title";

const BudgetCarousel = () => (
  <div>
    <Title>Overview</Title>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <i className="fas fa-shopping-basket text-4xl mb-2"></i>
                  <span>Groceries</span>
                  <div className="w-full h-2 bg-gray-300 rounded-full mt-2">
                    <div
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: "70%" }}
                    ></div>
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
