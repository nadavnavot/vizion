import React from "react";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import InsightsCarousel from "@/components/ui/insightCarousel";
import BudgetCarousel from "@/components/ui/budgetCarousel";
import GoalsCarousel from "@/components/ui/goalsCarousel";
import NetWorth from "@/components/ui/netWorth";
import BarChart from "@/components/ui/barChart";
import PieChart from "@/components/ui/pieChart";
import BalanceChart from "@/components/ui/balanceChart";
import CategorizeText from "@/components/ui/categorizeText";

const Overview = () => (
  <div className="bg-gray-100">
    <div className="p-8 mb-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-hidden">
        <Title>Overview</Title>

        <NetWorth />
        <InsightsCarousel />
        <BalanceChart />
        <BarChart />
        <PieChart />
        <BudgetCarousel />
        <GoalsCarousel />
        <CategorizeText />
      </div>
      <Navbar />
    </div>
  </div>
);

export default Overview;
