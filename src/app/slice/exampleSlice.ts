import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export type ExampleState = {
  counter: number;
};

const initialState: ExampleState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
    decrementCounter: (state) => {
      state.counter -= 1;
    },
    resetCounter: (state) => {
      state.counter = 0;
    },
  },
});

export const selectCounter = (state: RootState) => state.counter.counter;
export const { decrementCounter, incrementCounter, resetCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
