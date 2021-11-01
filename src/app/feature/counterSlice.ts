import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Counter {
  count: number;
}

const initialState: Counter = {
  count: 0,
};

const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    countAdded: (state: Counter, payLoadAction: PayloadAction<number>) => {
      state.count = payLoadAction.payload;
    },
  },
});

export default counterReducer.reducer;
export const { countAdded } = counterReducer.actions;
