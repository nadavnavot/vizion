import * as React from "react";
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
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div>
      <Title>Overview</Title>
    </div>
    <div>
      <NetWorth />
    </div>
    <div>
      <InsightsCarousel />
    </div>
    <div>
      <BalanceChart />
    </div>
    <div>
      <BarChart />
    </div>
    <div>
      <PieChart />
    </div>
    <div>
      <BudgetCarousel />
    </div>
    <div>
      <GoalsCarousel />
    </div>
    <div className="mb-32">
      <CategorizeText />
    </div>
    <Navbar />
  </div>
);

export default Overview;
