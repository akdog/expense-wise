import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IncomeState = {
  income: number;
  expenseLimit: number;
  monthlyBudget: number;
};

const initialState: IncomeState = {
  income: 0,
  expenseLimit: 0,
  monthlyBudget: 0,
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    getStats: (state, actions: PayloadAction<number>) => {
      state.income = actions.payload;
    },
    handleLimit: (state, actions: PayloadAction<number>) => {
      state.expenseLimit = actions.payload;
    },
  },
});

export const { getStats, handleLimit } = incomeSlice.actions;

export default incomeSlice.reducer;
