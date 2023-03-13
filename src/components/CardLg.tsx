import React from "react";
import { cardProps } from "../interfaces/componentTypes";
import IconDescription from "./IconDescription";

const CardLg = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
  isTrending,
}: cardProps) => {
  const [, ...thumbnailSrc]: any = thumbnail.trending?.large;

  return (
    <>
      <div className="trendingCard">
        <img
          className="thumbnailImg"
          src={`.././src${thumbnailSrc && thumbnailSrc.join("")}`}
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
