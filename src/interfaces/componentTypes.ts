import { initialStateInterface } from "./redux";

export interface trendingContainerProps {
  trendingData: initialStateInterface[];
}

export interface recommendedForYouContainerProps {
  recommendedData: initialStateInterface[];
}

export type cardProps = initialStateInterface

export type titleTextProps = {
  titleText: string;
}

export type iconDescriptionProps = {
  iconType: string;
}
