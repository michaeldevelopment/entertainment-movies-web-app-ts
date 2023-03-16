import React from "react";
import { useSelector } from "react-redux";
import { initialStateInterface } from "../interfaces/redux";
import MiddleContainer from "../components/MiddleContainer";
import Title from "../components/Title";

export default function Bookmark() {
  const allData = useSelector((state: initialStateInterface[]) => state);
  const bookmarkedMovies = allData?.filter(
    (element) => element.isBookmarked && element.category === "Movie"
  );
  const bookmarkedTvSeries = allData?.filter(
    (element) => element.isBookmarked && element.category === "TV Series"
  );

  return (
    <>
      {bookmarkedMovies.length ? (
        <MiddleContainer
          data={bookmarkedMovies}
          titleText={"Bookmarked Movies"}
        />
      ) : (
        <Title titleText="No bookmarked Movies :(" />
      )}
      {bookmarkedTvSeries.length ? (
        <MiddleContainer
          data={bookmarkedTvSeries}
          titleText={"Bookmarked Tv Series"}
        />
      ) : (
        <Title titleText="No bookmarked Tv Series :(" />
      )}
    </>
  );
}
