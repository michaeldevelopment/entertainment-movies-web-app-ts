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
  className?: string;
  fill?: string;
}

export interface stateNavbarInterface {
  isActiveIconNavHome: boolean;
  isActiveIconNavMovies: boolean;
  isActiveIconNavTvSeries: boolean;
  isActiveIconNavBookmark: boolean;
}

export interface stateReducerInterface {
  prev: stateNavbarInterface;
  next: stateNavbarInterface;
}

export interface iconSVGBookmarkActionableProps extends iconSVGProps {
  onClick: () => void;
}

export type cardProps = initialStateInterface;

export type titleTextProps = {
  titleText: string;
}

export type iconDescriptionProps = {
  iconType: string;
}
