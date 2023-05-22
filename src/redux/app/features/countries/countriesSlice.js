import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  countries: [],
};

export const getCountries = createAsyncThunk("getCountries", async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
});

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.loading = false;
    });
  },
});

export default countriesSlice.reducer;
