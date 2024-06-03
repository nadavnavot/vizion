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

const Overview = () => (
  <div>
    <Title>Overview</Title>
    <NetWorth />
    <InsightsCarousel />
    <BalanceChart />
    <BarChart />
    <PieChart />
    <BudgetCarousel />
    <GoalsCarousel />
    <div className="mb-48"></div>
    <Navbar />
  </div>
);

export default Overview;
