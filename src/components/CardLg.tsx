import React from 'react'
import { CardLgProps } from '../interfaces/componentTypes';

const CardLg = ({ title, thumbnail, year, category, rating, isBookmarked, isTrending } : CardLgProps) => {
  const [, ...thumbnailSrc] : any = thumbnail.trending?.small;

  return (
    <>
      <div className="trendingCard" style={{ backgroundImage: `url(.././src${thumbnailSrc && thumbnailSrc.join("")}`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <p>{title}</p>
        <p>{year}</p>
        <p>{category}</p>
        <p>{rating}</p>
      </div>
    </>
  )
}

export default CardLg;
