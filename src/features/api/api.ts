import apiRequest from "../../utils/api";
import {
  searchFailure,
  searchStart,
  searchSuccess,
} from "../countries/countrySlice";

export const searchCountry = async (dispatch: any, search: string) => {
  dispatch(searchStart());
  try {
    const response = await apiRequest.get(
      `/name/${search}?fields=name,flag,flags,continents`
    );
    dispatch(searchSuccess(response.data));
  } catch (error) {
    dispatch(searchFailure());
  }
};

export const showCountryDetails = async (dispatch: any, country: string) => {
  dispatch(searchStart());
  try {
    const response = await apiRequest.get(
      `/name/${country}`
    );
    console.log("res is ", response.data);
    dispatch(searchSuccess(response.data));
  } catch (error) {
    dispatch(searchFailure());
  }
};

export const hideCountryDetails = async (dispatch: any) => {
  return null;
}
