import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SavingState = {
  goals: [
    {
      name: string;
      amount: number;
      emoji: string;
    }
  ];
};

const initialState: SavingState = {
  goals: [
    {
      name: "",
      amount: 0,
      emoji: "",
    },
  ],
};

const savingSlice = createSlice({
  name: "savingGoals",
  initialState,
  reducers: {
    handleSavingGoals: (
      state,
      actions: PayloadAction<{ name: string; amount: number; emoji: string }>
    ) => {
      const newSavings = {
        name: actions.payload.name,
        amount: actions.payload.amount,
        emoji: actions.payload.emoji,
      };

      state.goals.push(newSavings);
    },
  },
});

export const { handleSavingGoals } = savingSlice.actions;

export default savingSlice.reducer;
