const ACTION_TYPES = {
  updateBookmarkedData: "updateBookmarkedData"
} as const

type actionTypes = typeof ACTION_TYPES;

export interface initialStateInterface {
  title: string;
  thumbnail: thumbnailType;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export type thumbnailType = {
  trending?: trendingInterface;
  regular: regularInterface;
};

interface trendingInterface {
  small: string;
  large: string;
}

interface regularInterface extends trendingInterface {
  medium: string;
}

interface actionDataTypes {
  type: string;
  payload?: string | object
}

interface updateBookmarkedDataType extends actionDataTypes {
  type: actionTypes["updateBookmarkedData"];
  payload: updateBookmarkedDataPayloadType;
}

export type updateBookmarkedDataPayloadType = {
  title: string;
  isBookmarkedBoolean: boolean;
};

export type dispatchActionTypes  = updateBookmarkedDataType;
