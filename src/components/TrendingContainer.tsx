import React from 'react'
import { trendingContainerProps } from '../interfaces/componentTypes';
import CardLg from './CardLg';

const TrendingContainer = ({ trendingData } : trendingContainerProps) => {
  return (
    <>
      <div>TrendingContainer</div>
      <div className="trendingContainer">
        {trendingData && trendingData.map((elementProps, index) => <CardLg {...elementProps} key={index} />)}
      </div>  
    </>
  )
}

export default TrendingContainer;
