import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchCountry,
  showCountryDetails,
  hideCountryDetails,
} from "../../features/api/api";
import { countryDetails } from "../../features/countries/countrySlice";
import { SingleCountry } from "../../utils/interfaces";
import { StylesContainer } from "../../components/Styles/Styles";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [visibleCountry, setVisibleCountry] = useState<string>("");

  const dispatch = useDispatch();

  const country = useSelector(countryDetails);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    searchCountry(dispatch, search);
  };

  const handleSearch = () => {
    setVisibleCountry("");

    searchCountry(dispatch, search);
  };

  const handleShowDetails = (countryName: string) => {
    if (visibleCountry === countryName) {
      hideCountryDetails(dispatch);
      setVisibleCountry("");
    } else {
      showCountryDetails(dispatch, countryName);
      setVisibleCountry(countryName);
    }
  };

  return (
    <StylesContainer.Container>
      <StylesContainer.CountriesContainer>
        <StylesContainer.HeadingContainer>
          <StylesContainer.CircleContainer>
            <StylesContainer.Circle></StylesContainer.Circle>
            <StylesContainer.Circle></StylesContainer.Circle>
            <StylesContainer.Circle></StylesContainer.Circle>
          </StylesContainer.CircleContainer>
          <StylesContainer.HeaderTextContainer display="flex" flex={4}>
            <StylesContainer.HeaderText>
              Countries Catalog
            </StylesContainer.HeaderText>
          </StylesContainer.HeaderTextContainer>
        </StylesContainer.HeadingContainer>
        <StylesContainer.SearchContainer>
          <StylesContainer.HeaderText paddingleft={54}>
            Keyword
          </StylesContainer.HeaderText>

          <StylesContainer.SearchSubcontainer>
            <StylesContainer.InputContainer
              type="text"
              placeholder="Type country name to search..."
              value={search}
              onChange={handleQuery}
              onKeyDown={(
                event: React.KeyboardEventHandler<HTMLInputElement> | any
              ) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <StylesContainer.SearchButton type="button" onClick={handleSearch}>
              Search
            </StylesContainer.SearchButton>
          </StylesContainer.SearchSubcontainer>
        </StylesContainer.SearchContainer>
        <StylesContainer.CountryDetailsContainer>
          {country.isFetching ? (
            <StylesContainer.Loading>loading...</StylesContainer.Loading>
          ) : (
            country.currentCountry?.map(
              (country: SingleCountry, index: number) => (
                <StylesContainer.CountryItem key={index}>
                  <StylesContainer.CountryHeader>
                    <StylesContainer.CountryImage
                      src={country.flags.png}
                      alt={country.flags.alt}
                    />
                    <StylesContainer.HeaderText>
                      {country.name.common}
                    </StylesContainer.HeaderText>
                  </StylesContainer.CountryHeader>
                  <StylesContainer.HeaderText>
                    Continent: {country.continents}
                  </StylesContainer.HeaderText>
                  <StylesContainer.SearchButton
                    type="button"
                    width={150}
                    onClick={() => handleShowDetails(country.name.official)}
                  >
                    {visibleCountry === country.name.official
                      ? "See less"
                      : "See details"}
                  </StylesContainer.SearchButton>
                  {visibleCountry === country.name.official && (
                    <StylesContainer.VisibleContainer>
                      <StylesContainer.HeaderText>
                        Population: {country.population}
                      </StylesContainer.HeaderText>
                      <StylesContainer.HeaderText>
                        Capital: {country.capital}
                      </StylesContainer.HeaderText>
                    </StylesContainer.VisibleContainer>
                  )}
                </StylesContainer.CountryItem>
              )
            )
          )}
        </StylesContainer.CountryDetailsContainer>
      </StylesContainer.CountriesContainer>
    </StylesContainer.Container>
  );
};

export default Home;
