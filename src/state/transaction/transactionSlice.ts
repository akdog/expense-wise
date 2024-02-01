import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TransactionState = {
  icon: React.ReactNode;
  iconType: string;
  category: string;
  transaction: [
    {
      info: string;
      note: string;
      amount: number;
    }
  ];
};

const initialState: TransactionState = {
  icon: null,
  iconType: "",
  category: "",
  transaction: [
    {
      info: "",
      note: "",
      amount: 0,
    },
  ],
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
      actions: PayloadAction<{ info: string; amount: number; note: string }>
    ) => {
      const newTransaction = {
        info: actions.payload.info,
        note: actions.payload.note,
        amount: actions.payload.amount,
      };

      state.transaction.push(newTransaction);
    },
  },
});

export const { handleTransactionCategory, handleTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
