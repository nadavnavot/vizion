import React from "react";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";

// Insights Carousel
const InsightsCarousel = () => (
  <Carousel>
    <Title>Insights</Title>
    <CarouselContent>
      <div className="w-96 h-48 bg-gray-200 flex items-center justify-center rounded-lg">
        <CarouselItem>Insight 1</CarouselItem>
      </div>
      <div className="w-96 h-48 bg-gray-200 flex items-center justify-center rounded-lg">
        <CarouselItem>Insight 2</CarouselItem>
      </div>
      <div className="w-96 h-48 bg-gray-200 flex items-center justify-center rounded-lg">
        <CarouselItem>Insight 3</CarouselItem>
      </div>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

// Budget Carousel
const BudgetCarousel = () => (
  <Carousel>
    <Title>Budget</Title>
    <CarouselContent>
      <div className="w-96 h-48 bg-gray-200 flex flex-col items-center justify-center rounded-lg">
        {/* Title and Icon */}
        <div className="flex items-center mb-2">
          <i className="fas fa-shopping-basket text-xl mr-2"></i>
          <span>Groceries</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-300 rounded-full">
          <div
            className="h-2 rounded-full bg-green-500"
            style={{ width: "70%" }} // Example: Set width dynamically based on progress
          ></div>
        </div>
      </div>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

// Goals Carousel
const GoalsCarousel = () => (
  <Carousel>
    <Title>Goals</Title>
    <CarouselContent>
      <div className="w-96 h-48 bg-gray-200 flex items-center justify-center rounded-lg">
        {/* Title and Icon */}
        <div className="flex items-center mb-2">
          <i className="fas fa-bullseye text-xl mr-2"></i>
          <span>Save for Vacation</span>
        </div>
      </div>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

// Main component that renders all carousels
const CarouselPage = () => (
  <div>
    <Title>Carousel Page</Title>
    {/* Render the carousels */}
    <InsightsCarousel />
    <BudgetCarousel />
    <GoalsCarousel />
    {/* Navbar */}
    <Navbar />
  </div>
);

export default CarouselPage;
