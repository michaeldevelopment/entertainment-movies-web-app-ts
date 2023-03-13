import { initialStateInterface } from "./redux";

export interface trendingContainerProps {
  trendingData: initialStateInterface[];
}

export interface recommendedForYouContainerProps {
  recommendedData: initialStateInterface[];
}


export interface containerProps {
  data: initialStateInterface[];
  titleText: string;
}

export interface iconSVGProps {
  className: string;
  fill: string;
}

export type cardProps = initialStateInterface

export type titleTextProps = {
  titleText: string;
}

export type iconDescriptionProps = {
  iconType: string;
}
