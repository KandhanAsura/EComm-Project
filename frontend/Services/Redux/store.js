import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./APIServices/apiSlice";
import cartDataReducer from "./CartData/CartDataSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cartDataSlice: cartDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
