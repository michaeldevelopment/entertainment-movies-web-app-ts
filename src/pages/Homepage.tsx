import { useSelector } from "react-redux";
import { initialStateInterface } from "../interfaces/redux";
import BigContainer from "../components/BigContainer";
import MiddleContainer from "../components/MiddleContainer";

export default function Homepage() {
  const allData = useSelector((state: initialStateInterface[]) => state);
  const trendingData = allData.filter((element) => element.isTrending);
  const recommendedData = allData.filter((element) => !element.isTrending);

  return (
    <>
      <BigContainer data={trendingData} titleText={"Trending"}/>
      <MiddleContainer data={recommendedData} titleText={"Recommended for you"}/>
    </>
  );
}
