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
  const [, ...thumbnailSrc]: string = thumbnail.regular.small;

  return (
    <>
      <div className="recommendedForYouCard">
        <img
          className="thumbnailImg"
          src={`.././src${thumbnailSrc && thumbnailSrc.join("")}`}
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
