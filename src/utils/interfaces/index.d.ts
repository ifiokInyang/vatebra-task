export interface HeaderContainerProps {
  display?: string;
  flex?: number;
}

export interface ICountry {
  currentCountry: null | [];
  isFetching: boolean;
  error: boolean;
}

export interface SingleCountry {
  continents: Array<string>;
  flags: { png: string; svg: string; alt: string };
  name: {
    common: string;
    official: string;
    nativeName: { nld: { official: string; common: string } };
  };
}
