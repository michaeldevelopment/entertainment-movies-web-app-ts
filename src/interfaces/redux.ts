export interface initialStateInterface {
  title: string;
  thumbnail: thumbnailInterface;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean
};

interface thumbnailInterface {
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
