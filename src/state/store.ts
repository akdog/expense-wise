import { configureStore } from "@reduxjs/toolkit";

//Import Reducers
import incomeReducer from "./Income/incomeSlice";
import transactionReducer from "./transaction/transactionSlice";
import savingReducer from "./savingGoals/savingSlice";

export const store = configureStore({
  reducer: {
    income: incomeReducer,
    transaction: transactionReducer,
    savings: savingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
