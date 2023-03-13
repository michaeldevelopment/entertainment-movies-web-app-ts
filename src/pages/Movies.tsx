import { useSelector } from "react-redux";
import { initialStateInterface } from "../interfaces/redux";
import MiddleContainer from "../components/MiddleContainer";

const Movies = () => {
  const allData = useSelector((state: initialStateInterface[]) => state);
  const moviesData = allData.filter((element) => element.category === "Movie");

  return <MiddleContainer data={moviesData} titleText={"Movies"} />
}

export default Movies;
