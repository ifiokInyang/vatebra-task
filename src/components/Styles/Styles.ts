import styled, { css } from "styled-components";
import { HeaderContainerProps } from "../../utils/interfaces";

export const StylesContainer = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `,
  CountriesContainer: styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    width: 40%;
    max-height: 90%;
  `,
  HeadingContainer: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    border-bottom: 2px solid black;
  `,
  CircleContainer: styled.div`
    display: flex;
    justify-content: space-around;
    flex: 0.8;
  `,
  HeaderTextContainer: styled.div<HeaderContainerProps>`
    ${({ display }) =>
      display &&
      css`
        display: ${display};
      `};
    justify-content: center;
    ${({ flex }) =>
      flex &&
      css`
        flex: ${flex};
      `};
  `,
  HeaderText: styled.p`
    font-size: 20px;
  `,
  SearchContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;
  `,
  Circle: styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
  `,
  CountryDetailsContainer: styled.div`
    max-height: 450px;
    overflow-y: auto;
    border-top: 2px solid black;
  `,
  InputContainer: styled.input`
    padding: 16px;
    width: 50%;
    font-size: 20px;
  `,
  SearchButton: styled.button`
    padding: 7px 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
    width: 120px;
  `,
  SearchSubcontainer: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  `,
  CountryItem: styled.div`
    margin: 20px 50px;
  `,
  CountryHeader: styled.div`
    display: flex;
    align-items: center;
  `,
  CountryImage: styled.img`
    object-fit: cover;
    width: 20px;
    height: 20px;
    margin-right: 20px;
  `,
    Loading: styled.div`
  margin: 20px;
  font-size: 24px
    `
};
