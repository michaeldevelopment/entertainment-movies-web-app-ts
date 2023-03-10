import { initialStateInterface } from "./redux";

export interface trendingContainerProps {
  trendingData: initialStateInterface[]
}

export interface RecommendedForYouContainerProps {
  recommendedData: initialStateInterface[]
}

export type CardProps = initialStateInterface

export type titleTextProps = {
  titleText: string
}
