import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TransactionState = {
  icon: React.ReactNode;
  iconType: string;
  category: string;
};

const initialState: TransactionState = {
  icon: null,
  iconType: "",
  category: "",
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    handleTransaction: (
      state,
      actions: PayloadAction<{ iconType: string; category: string }>
    ) => {
      state.category = actions.payload.category;
      state.iconType = actions.payload.iconType;
    },
  },
});

export const { handleTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
