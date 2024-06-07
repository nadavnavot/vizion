import { Schema, model, models } from "mongoose";

const budgetSchema = new Schema(
  {
    active: {
      type: Boolean,
      required: false,
      default: true,
    },
    categoryColor: {
      type: String,
      required: false,
    },
    categoryIcon: {
      type: String,
      required: false,
    },
    categoryName: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    activeSince: {
      type: Date,
      required: false,
      default: Date.now,
    },
    amountSpent: {
      type: Number,
      required: false,
      default: 0,
    },
    amountTotal: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
);

const BudgetModel = models.Budget || model("Budget", budgetSchema);

export default BudgetModel;
