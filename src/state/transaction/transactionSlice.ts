import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TransactionState = {
  icon: React.ReactNode;
  iconType: string;
  category: string;
  note: string;
  amount: number;
};

const initialState: TransactionState = {
  icon: null,
  iconType: "",
  category: "",
  note: "",
  amount: 0,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    handleTransactionCategory: (
      state,
      actions: PayloadAction<{ iconType: string; category: string }>
    ) => {
      state.category = actions.payload.category;
      state.iconType = actions.payload.iconType;
    },
    handleTransaction: (
      state,
      actions: PayloadAction<{ category: string; amount: number; note: string }>
    ) => {
      state.amount = actions.payload.amount;
      state.category = actions.payload.category;
      state.note = actions.payload.note;
    },
  },
});

export const { handleTransactionCategory, handleTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
