import { createSlice } from "@reduxjs/toolkit";
import { ICountry } from "../../utils/interfaces";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  } as ICountry,
  reducers: {
    searchStart: (state) => {
      state.isFetching = true;
    },
    searchSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    searchFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const countryDetails = (state: { country: ICountry }) => state.country;

export const { searchStart, searchSuccess, searchFailure } =
  countrySlice.actions;
export default countrySlice.reducer;
