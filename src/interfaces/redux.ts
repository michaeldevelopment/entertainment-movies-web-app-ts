export interface initialStateInterface {
  title: string;
  thumbnail: thumbnailType;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean
};

export type thumbnailType = {
  trending?: trendingInterface;
  regular: regularInterface
};

interface trendingInterface {
  small: string;
  large: string;
};

interface regularInterface extends trendingInterface {
  medium: string;
};

export type actionTypes = {
  type: string;
  payload: string;
};
