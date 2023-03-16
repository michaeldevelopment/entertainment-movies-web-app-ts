import { useSelector } from "react-redux";
import { initialStateInterface } from "../interfaces/redux";
import MiddleContainer from "../components/MiddleContainer";

const TvShows = () => {
  const allData = useSelector((state: initialStateInterface[]) => state);
  const tvSeriesData = allData.filter(
    (element) => element.category === "TV Series"
  );

  return <MiddleContainer data={tvSeriesData} titleText={"Tv Shows"} />;
};

export default TvShows;
