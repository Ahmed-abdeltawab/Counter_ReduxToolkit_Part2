import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../components/counter/CounterSlice";
import AuthReducer from "../components/counter/AuthSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: AuthReducer
  }
});
