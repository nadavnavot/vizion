import * as React from "react";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import InsightsCarousel from "@/components/ui/insightCarousel";
import BudgetCarousel from "@/components/ui/budgetCarousel";
import GoalsCarousel from "@/components/ui/goalsCarousel";

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
