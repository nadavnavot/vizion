import * as React from "react";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import insightCarousel from "@/components/ui/insightCarousel";
import budgetCarousel from "@/components/ui/budgetCarousel";
import goalsCarousel from "@/components/ui/goalsCarousel";

const Overview = () => (
  <div>
    <Title>Overview</Title>
    <InsightsCarousel />
    <BudgetCarousel />
    <GoalsCarousel />
    <Navbar />
  </div>
);

export default Overview;
