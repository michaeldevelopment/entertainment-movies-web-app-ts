import React from "react";
import { searchContainerProps } from "../interfaces/componentTypes";
import MiddleContainer from "./MiddleContainer";
import Title from "./Title";

const SearchResultsContainer = ({
  inputValue,
  pathname,
  data,
}: searchContainerProps) => {
  switch (pathname) {
    case "movies":
      data = data.filter(
        (element) =>
          element.category === "Movie" &&
          element.title.substring(0, inputValue.length).includes(inputValue)
      );
      break;
    case "tvshows":
      data = data.filter(
        (element) =>
          element.category === "TV Series" &&
          element.title.substring(0, inputValue.length).includes(inputValue)
      );
      break;
    case "bookmark":
      data = data.filter(
        (element) =>
          element.isBookmarked &&
          element.title.substring(0, inputValue.length).includes(inputValue)
      );
      break;
    default:
      data = data.filter((element) =>
        element.title.substring(0, inputValue.length).includes(inputValue)
      );
      break;
  }

  return (
    <>
      {inputValue?.length && data.length ? (
        <MiddleContainer
          data={data}
          titleText={`${data.length} results found for "${inputValue}"`}
        />
      ) : (
        <Title titleText={`Not results found for "${inputValue}"`} />
      )}
    </>
  );
};

export default SearchResultsContainer;
