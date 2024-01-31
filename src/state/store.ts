import { configureStore } from "@reduxjs/toolkit";

//Import Reducers
import incomeReducer from "./Income/incomeSlice";
import transactionReducer from "./transaction/transactionSlice";

export const store = configureStore({
  reducer: {
    income: incomeReducer,
    transaction: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
