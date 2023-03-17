import { initialState } from "./initialState";
import { initialStateInterface, dispatchActionTypes } from "./../interfaces/redux";

export default function reducer(
  prevState: initialStateInterface[] = initialState,
  action: dispatchActionTypes
) {
  const { type, payload } = action;

  switch (type) {
    case "updateBookmarkedData":
      // let bookmarkedIndexElement = prevState.find(element => element.title === payload.title);
      // prevState[bookmarkedIndexElement] = payload.isBookmarkedBoolean;
      // return prevState;
      return prevState.map((element) =>
        element.title === payload.title
          ? { ...element, isBookmarked: payload.isBookmarkedBoolean }
          : element
      );
    default:
      return prevState;
  }
}
