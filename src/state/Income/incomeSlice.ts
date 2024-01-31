// incomeSlice.ts

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type ExpenseCategory = {
  category: string;
  limit: number;
}[];

type IncomeState = {
  income: number;
  expenseLimit: ExpenseCategory;
  monthlyBudget: number;
};

const initialExpenseCategory: ExpenseCategory = [
  { category: "eatingOut", limit: 0 },
  { category: "groceries", limit: 0 },
  { category: "electronics", limit: 0 },
  { category: "clothes", limit: 0 },
  { category: "education", limit: 0 },
];

const initialState: IncomeState = {
  income: 0,
  expenseLimit: initialExpenseCategory,
  monthlyBudget: 0,
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    handleIncome: (state, action: PayloadAction<number>) => {
      state.income = action.payload;
    },
    handleLimit: (
      state,
      action: PayloadAction<{ category: string; limit: number }>
    ) => {
      const { category, limit } = action.payload;
      const existingCategory = state.expenseLimit.find(
        (expense) => expense.category === category
      );

      if (existingCategory) {
        existingCategory.limit = limit;
      }
    },
    handleBudget: (state, action: PayloadAction<number>) => {
      state.monthlyBudget = action.payload;
    },
  },
});

export const { handleIncome, handleLimit, handleBudget } = incomeSlice.actions;

export default incomeSlice.reducer;
