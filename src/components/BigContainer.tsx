import { containerProps } from "../interfaces/componentTypes";
import CardLg from "./CardLg";
import Title from "./Title";

const BigContainer = ({ data, titleText }: containerProps) => {
  return (
    <>
      <Title titleText={titleText} />
      <div className="trendingContainer">
        {data &&
          data.map((elementProps) => (
            <CardLg {...elementProps} key={elementProps.title} />
          ))}
      </div>
    </>
  );
};

export default BigContainer;
