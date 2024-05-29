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
  {
    insight:
      "Keep depositing into your Maldives goal—just 3 months to your dream vacation!",
    category: "#Goals",
  },
  {
    insight:
      "You've saved 10% on transportation this month. Keep up the efficient planning!",
    category: "#Budget",
  },
  {
    insight:
      "Unclassified expenses exceeded by 10%. Review and categorize to improve tracking.",
    category: "#Budget",
  },
  {
    insight: "Direct Your Christmas Bonus To Goals: Save 30% More This Year.",
    category: "#Goals",
  },
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
        {insightsData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card
                  className={
                    isEven ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                  }
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <span className="text-2xl font-semibold mb-2">
                      {item.insight}
                    </span>
                    <span className="text-sm">{item.category}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

export default InsightsCarousel;
