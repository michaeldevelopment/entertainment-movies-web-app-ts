import React, { useState } from "react";
import { cardProps } from "../interfaces/componentTypes";
import IconDescription from "./IconDescription";
import IconBookmarkEmpty from "../svgIcons/IconBookmarkEmpty";
import { useDispatch } from "react-redux";
import { updateBookmarkedData } from "../store/actions";
import { useBookmarkFunctionality } from "../customHooks";

const CardLg = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
}: cardProps) => {
  const { isActiveObj, handleOnClickBookmarkIcon } =
    useBookmarkFunctionality(isBookmarked);
  const [, ...thumbnailSrc] = thumbnail.trending?.large as string;

  return (
    <>
      <div className="trendingCard">
        <img
          className="thumbnailImg"
          src={`.././src${thumbnailSrc && thumbnailSrc.join("")}`}
        />
        <IconBookmarkEmpty
          className={`cardBookmarkBigContainerIcon ${
            isActiveObj ? "isBookmarked" : ""
          }`}
          fill="none"
          onClick={() =>
            handleOnClickBookmarkIcon(isActiveObj ? false : true, title)
          }
        />
        <div className="trendingCardText">
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

export default CardLg;
