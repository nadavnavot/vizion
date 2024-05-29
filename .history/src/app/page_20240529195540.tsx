import * as React from "react";
import Navbar from "@/components/ui/navbar";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Title from "../components/ui/title";

// Insights Carousel
const InsightsCarousel = () => (
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
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

// Budget Carousel
const BudgetCarousel = () => (
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
);

// Goals Carousel
const GoalsCarousel = () => (
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
                <i className="fas fa-bullseye text-4xl mb-2"></i>
                <span>Save for Vacation</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

// Main component that renders all carousels
const Overview = () => (
  <div>
    {/* Render the carousels */}
    <Title>Overview</Title>
    <InsightsCarousel />
    <BudgetCarousel />
    <GoalsCarousel />
    <Navbar />
  </div>
);

export default Overview;
