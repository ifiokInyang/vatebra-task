import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import { searchCountry } from "../../features/api/api";
import { countryDetails } from "../../features/countries/countrySlice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../features/api/api", () => ({
  searchCountry: jest.fn(),
}));

jest.mock("../../features/countries/countrySlice", () => ({
  countryDetails: jest.fn(),
}));

describe("Home component", () => {
  beforeEach(() => {
    (useDispatch as jest.Mock).mockClear();
    (useSelector as jest.Mock).mockClear();
    (searchCountry as jest.Mock).mockClear();
    (countryDetails as jest.Mock).mockClear();
  });

  test("renders the component", () => {
    (useDispatch as jest.Mock).mockReturnValue(jest.fn());
    (useSelector as jest.Mock).mockReturnValue({ currentCountry: [] });

    render(<Home />);

  });

  test("handles search input and button click", () => {
    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (useSelector as jest.Mock).mockReturnValue({ currentCountry: [] });

    render(<Home />);

    const searchInput = screen.getByPlaceholderText("Type country name to search...");
    fireEvent.change(searchInput, { target: { value: "search term" } });

    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    expect(searchCountry).toHaveBeenCalledWith(dispatch, "search term");
  });
});
