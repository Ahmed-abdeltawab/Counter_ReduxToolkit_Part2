import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      console.log(action);
      const amount = Number(action.payload.count);
      state.value += amount;
    }
  }
});
export const { increment, decrement, incrementByValue } = CounterSlice.actions;
export default CounterSlice.reducer;
