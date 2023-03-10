import React from 'react'
import { trendingContainerProps } from '../interfaces/componentTypes';
import CardLg from './CardLg';
import Title from './Title';

const TrendingContainer = ({ trendingData } : trendingContainerProps) => {
  return (
    <>
      <Title titleText={"Trending"}/>
      <div className="trendingContainer">
        {trendingData && trendingData.map((elementProps, index) => <CardLg {...elementProps} key={index} />)}
      </div>  
    </>
  )
}

export default TrendingContainer;
