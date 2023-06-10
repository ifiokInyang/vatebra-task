import React from "react";
import { styled, css } from "styled-components";
import { HeaderContainerProps } from "../../utils/interfaces";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 60%;
  height: 90%;
`;
const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-bottom: 2px solid black;
`;
const CircleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 0.8;
`;
const HeaderTextContainer = styled.div<HeaderContainerProps>`
  ${({ display }) => css`
    display: ${display};
  `};
  justify-content: center;
  ${({ flex }) => css`
    flex: ${flex};
  `};
`;

const HeaderText = styled.p`

`;

const SearchContainer = styled.div``;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 50%;
`;
const CountryDetailsContainer = styled.div``;

const Home = () => {
  return (
    <Container>
      <CountriesContainer>
        <HeadingContainer>
          <CircleContainer>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
          </CircleContainer>
          <HeaderTextContainer display="flex" flex={4}>
            <HeaderText>Countries Catalog</HeaderText>
          </HeaderTextContainer>
        </HeadingContainer>
        <SearchContainer>
          <HeaderTextContainer>
            <HeaderText>Keyword</HeaderText>
          </HeaderTextContainer>
        </SearchContainer>
        <CountryDetailsContainer></CountryDetailsContainer>
      </CountriesContainer>
    </Container>
  );
};

export default Home;
