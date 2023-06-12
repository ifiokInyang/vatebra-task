import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import { searchCountry } from "../../features/api/api";
import { countryDetails } from "../../features/countries/countrySlice";

// Mock useDispatch and useSelector
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock searchCountry and countryDetails
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

    // Assert that the component renders without errors
    // You can add more assertions based on your specific requirements
    expect(screen.getByText("Countries Catalog")).toBeInTheDocument();
  });

  test("handles search input and button click", () => {
    const dispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (useSelector as jest.Mock).mockReturnValue({ currentCountry: [] });

    render(<Home />);

    // Simulate user input
    const searchInput = screen.getByPlaceholderText(
      "Type country name to search..."
    );
    fireEvent.change(searchInput, { target: { value: "search term" } });

    // Simulate button click
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    // Assert that the searchCountry action is called with the correct arguments
    expect(searchCountry).toHaveBeenCalledWith(dispatch, "search term");
  });

  test("handles toggling country details visibility", () => {
    const dispatch = jest.fn();
    const mockCountry = {
      name: {
        common: "Country 1",
        official: "Country 1",
      },
      continents: "Continent 1",
      population: 1000000,
      capital: "Capital 1",
      flags: {
        png: "flag.png",
        alt: "Flag",
      },
    };
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (useSelector as jest.Mock).mockReturnValue({
      isFetching: false,
      currentCountry: [mockCountry],
    });

    render(<Home />);

    // Simulate button click to show details
    const showDetailsButton = screen.getByText("See details");
    fireEvent.click(showDetailsButton);

    // Assert that the country details are visible
    expect(screen.getByText("Population: 1000000")).toBeInTheDocument();
    expect(screen.getByText("Capital: Capital 1")).toBeInTheDocument();

    // Simulate button click to hide details
    fireEvent.click(showDetailsButton);

    // Assert that the country details are hidden
    expect(screen.queryByText("Population: 1000000")).toBeNull();
    expect(screen.queryByText("Capital: Capital 1")).toBeNull();
  });
});
