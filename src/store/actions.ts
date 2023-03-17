import {
  updateBookmarkedDataPayloadType,
} from "./../interfaces/redux";

export const updateBookmarkedData = ({
  title,
  isBookmarkedBoolean,
}: updateBookmarkedDataPayloadType) => ({
  type: "updateBookmarkedData",
  payload: { title, isBookmarkedBoolean },
});
