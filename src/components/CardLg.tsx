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
  return (
    <>
      <div className="trendingCard">
        <img
          className="thumbnailImg"
          src={`${import.meta.env.BASE_URL}${thumbnail.trending?.large}`}
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
