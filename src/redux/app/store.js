import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import testStringReducer from "./features/testString/testStringSlice";
import countriesReducer from "./features/countries/countriesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    testString: testStringReducer,
    countries: countriesReducer,
  },
});
