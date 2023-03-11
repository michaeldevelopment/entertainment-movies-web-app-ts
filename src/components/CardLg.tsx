import React from "react";
import { cardProps } from "../interfaces/componentTypes";

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
        <img src={`.././src${thumbnailSrc && thumbnailSrc.join("")}`} />

        <div className="trendingCardText">
          <span>
            {year} - {category} - {rating}
          </span>
          <h2> {title} </h2>
        </div>
      </div>
    </>
  );
};

export default CardLg;
