import { Schema, model, models } from "mongoose";

const budgetSchema = new Schema(
  {
    active: {
      type: Boolean,
      required: false,
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
    },
    amountSpent: {
      type: Number,
      required: false,
    },
    amountTotal: {
      type: Number,
      required: false,
    },
  },
  { timestamps: false }
);

const BudgetModel = models.Budget || model("Budget", budgetSchema);

module.exports = BudgetModel;
