import React from "react";
import { cardProps } from "../interfaces/componentTypes";
import IconDescription from "./IconDescription";
import IconBookmarkEmpty from "../svgIcons/IconBookmarkEmpty";
import { useBookmarkFunctionality } from "../customHooks";

const CardSm = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
}: cardProps) => {
  const { isActiveObj, handleOnClickBookmarkIcon } =
    useBookmarkFunctionality(isBookmarked);
  return (
    <>
      <div className="recommendedForYouCard">
        <img
          className="thumbnailImg"
          src={`${import.meta.env.BASE_URL}${thumbnail.regular.small}`}
        />
        <IconBookmarkEmpty
          className={`cardBookmarkMiddleContainerIcon ${
            isActiveObj ? "isBookmarked" : ""
          }`}
          fill="none"
          onClick={() =>
            handleOnClickBookmarkIcon(isActiveObj ? false : true, title)
          }
        />
        <div className="recommendedForYouText">
          <span>
            {year} • <IconDescription iconType={`${category}`} /> • {category} •
            {rating}
          </span>
          <h2> {title} </h2>
        </div>
      </div>
    </>
  );
};

export default CardSm;
