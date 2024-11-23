import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./auth";
import  restaurantSlice  from "./rest";

export const store = configureStore({
  reducer: {
    auth:authSlice,
    rest: restaurantSlice
  },
});
