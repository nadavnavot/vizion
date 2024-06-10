import React from "react";
import ClientBudgetCard from "@/components/ui/clientBudgetCard";
import { getBudgets } from "../db/actions/budgetAction";

export async function BudgetCard() {
  const { data, errMsg } = await getBudgets();

  if (errMsg) return <h1>{errMsg}</h1>;

  return <ClientBudgetCard initialData={data} />;
}

export default BudgetCard;
