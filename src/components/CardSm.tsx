import React from 'react'
import { CardProps } from '../interfaces/componentTypes';

const CardSm = ({ title, thumbnail, year, category, rating, isBookmarked, isTrending } : CardProps) => {
  const [, ...thumbnailSrc] : any = thumbnail.regular?.small;

  return (
    <>
      <div className="recommendedForYouCard">
        <img src={`.././src${thumbnailSrc && thumbnailSrc.join("")}`} />
        
        <div className="recommendedForYouText">
          <span>{year} - {category} - {rating}</span>
          <h2> {title} </h2>
        </div>
      </div>
    </>
  )
}

export default CardSm;
