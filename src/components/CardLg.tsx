import React, { useState } from "react";
import { cardProps } from "../interfaces/componentTypes";
import IconDescription from "./IconDescription";

import IconBookmarkEmpty from "../svgIcons/IconBookmarkEmpty";

const CardLg = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
  isTrending,
}: cardProps) => {
  const [ isActiveObj, setIsActive ] = useState(false);
  const [, ...thumbnailSrc]: any = thumbnail.trending?.large;

  const handleOnClickBookmarkIcon = (isActiveBoolean: boolean) => {
    return setIsActive(isActiveBoolean);
  }

  return (
    <>
      <div className="trendingCard">
        <img
          className="thumbnailImg"
          src={`.././src${thumbnailSrc && thumbnailSrc.join("")}`}
        />
        <IconBookmarkEmpty className={`cardBookmarkIcon ${isActiveObj ? "isBookmarked" : "" }`} fill="none" onClick={() => handleOnClickBookmarkIcon(isActiveObj ? false : true)}/>
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
