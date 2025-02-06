import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type AppDispatcher = typeof store.dispatch;
export type AppSelection = ReturnType<typeof store.getState>;
