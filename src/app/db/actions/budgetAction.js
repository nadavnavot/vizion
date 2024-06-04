import BudgetModel from "../models/budgetModel";
import connectDB from "../config/database";

export async function getBudgets() {
  try {
    await connectDB();
    const budgets = await BudgetModel.find();
    const data = JSON.parse(JSON.stringify(budgets));

    return { data };
  } catch (error) {
    return { errMsg: error.message };
  }
}
