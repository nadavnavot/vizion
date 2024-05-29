import React from "react";
import { Card, CardContent } from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Subtitle from "./subtitle";

const insightsData = [
  {
    insight:
      "Your restaurants budget increased by 20% last month. Consider cooking at home more often to save.",
    category: "#Budget",
  },
  { insight: "Insight 2", category: "Category B" },
  { insight: "Insight 3", category: "Category C" },
  { insight: "Insight 4", category: "Category D" },
  { insight: "Insight 5", category: "Category E" },
];

const InsightsCarousel = () => (
  <div>
    <Subtitle>Insights</Subtitle>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {insightsData.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{item.insight}</span>
                  <span className="text-sm text-gray-500">{item.category}</span>
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

export default InsightsCarousel;
