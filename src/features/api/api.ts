import { apiRequest } from "../../utils/api/requestMethod";
import {
  searchFailure,
  searchStart,
  searchSuccess,
} from "../countries/countrySlice";

export const searchCountry = async (dispatch: any, search: string) => {
  dispatch(searchStart());
  try {
    const response = await apiRequest.get(
      `/name/${search}?fields=name,flags,continents`
    );
    console.log(response.data);
    dispatch(searchSuccess(response.data));
  } catch (error) {
    dispatch(searchFailure());
  }
};
