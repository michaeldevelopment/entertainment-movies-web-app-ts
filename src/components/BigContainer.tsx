import { containerProps } from "../interfaces/componentTypes";
import CardLg from "./CardLg";
import Title from "./Title";

const BigContainer = ({ data, titleText }: containerProps) => {
  return (
    <>
      <Title titleText={titleText} />
      <div className="trendingContainer">
        {data &&
          data.map((elementProps, index) => (
            <CardLg {...elementProps} key={index} />
          ))}
      </div>
    </>
  );
};

export default BigContainer;
