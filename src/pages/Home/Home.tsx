import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountry } from "../../features/api/api";
import { countryDetails } from "../../features/countries/countrySlice";
import { SingleCountry } from "../../utils/interfaces";
import { StylesContainer } from "../../components/Styles/Styles";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  const country = useSelector(countryDetails);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    searchCountry(dispatch, search);
  };

  const showDetails = () => {};

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
          <StylesContainer.HeaderTextContainer>
            <StylesContainer.HeaderText>Keyword</StylesContainer.HeaderText>
          </StylesContainer.HeaderTextContainer>

          <StylesContainer.SearchSubcontainer>
            <StylesContainer.InputContainer
              type="text"
              placeholder="Type to search..."
              value={search}
              onChange={handleQuery}
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
                    onClick={showDetails}
                  >
                    See details
                  </StylesContainer.SearchButton>
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
