import { initialStateInterface } from "./redux";

export interface trendingContainerProps {
  trendingData: initialStateInterface[]
}

export interface recommendedForYouContainerProps {
  recommendedData: initialStateInterface[]
}

export interface navbarProps {
  children: React.ReactElement;
}

export type cardProps = initialStateInterface

export type titleTextProps = {
  titleText: string
}

