import * as React from "react";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import InsightsCarousel from "@/components/ui/insightCarousel";
import BudgetCarousel from "@/components/ui/budgetCarousel";
import GoalsCarousel from "@/components/ui/goalsCarousel";
import NetWorth from "@/components/ui/netWorth";
import BarChart from "@/components/ui/barChart";

const Overview = () => (
  <div>
    <Title>Overview</Title>
    <NetWorth />
    <InsightsCarousel />
    <BarChart />
    <BudgetCarousel />
    <GoalsCarousel />
    <div className="mb-8"></div>
    <Navbar />
  </div>
);

export default Overview;
