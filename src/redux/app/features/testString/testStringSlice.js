import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testString: "First",
};

export const testStringSlice = createSlice({
  name: "testString",
  initialState: initialState,
  reducers: {
    stringAdil: (state) => {
      state.testString = "Adil";
    },
    stringFatih: (state) => {
      state.testString = "Fatih";
    },
    stringCustom: (state, action) => {
      state.testString = action.payload;
    },
  },
});

export const { stringAdil, stringFatih, stringCustom } =
  testStringSlice.actions;
export default testStringSlice.reducer;
