import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { initialStateInterface } from '../interfaces/redux';
import TrendingContainer from '../components/TrendingContainer';

export default function Homepage() {
   const allData = useSelector((state: initialStateInterface[]) => state);
   const trendingData = allData.filter((element) => element.isTrending);

  return (
    <>
      <p> Trending </p>
      <TrendingContainer trendingData={trendingData} />
    </>
  )
}
