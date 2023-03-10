import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { initialStateInterface } from '../interfaces/redux';
import TrendingContainer from '../components/TrendingContainer';
import RecommendedForYouContainer from '../components/RecommendedForYouContainer';

export default function Homepage() {
   const allData = useSelector((state: initialStateInterface[]) => state);
   const trendingData = allData.filter((element) => element.isTrending);
   const recommendedData = allData.filter((element) => !element.isTrending);

  return (
    <>
      <TrendingContainer trendingData={trendingData} />
      <RecommendedForYouContainer recommendedData={recommendedData} />
    </>
  )
}
