import { updateBookmarkedDataPayloadType, actionTypes } from './../interfaces/redux';

export const updateBookmarkedData = ({ title, isBookmarkedBoolean }: updateBookmarkedDataPayloadType): actionTypes => ({ type: "updateBookmarkedData", payload: { title, isBookmarkedBoolean }})
