import BudgetModel from "../models/budgetModel";
import connectDB from "../config/database";

export async function updateBudget(_id, updates) {
  try {
    await connectDB();
    const updatedBudget = await BudgetModel.findByIdAndUpdate(_id, updates, {
      new: true,
    });
    if (!updatedBudget) {
      throw new Error("Budget not found");
    }
    return { success: true, data: updatedBudget };
  } catch (error) {
    return { success: false, errMsg: error.message };
  }
}

export async function deactivateBudget(_id) {
  try {
    const { success, errMsg, data } = await updateBudget(_id, {
      active: false,
    });
    if (success) {
      return { success: true, data };
    } else {
      throw new Error(errMsg);
    }
  } catch (error) {
    return { success: false, errMsg: error.message };
  }
}

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
