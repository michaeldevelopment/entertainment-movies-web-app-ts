import { containerProps } from "../interfaces/componentTypes";
import Title from "./Title";
import CardSm from "./CardSm";

const MiddleContainer = ({
  data,
  titleText
}: containerProps) => {
  return (
    <>
      <Title titleText={titleText} />
      <div className="recommendedForYouContainer">
        {data &&
          data.map((elementProps, index) => (
            <CardSm {...elementProps} key={index} />
          ))}
      </div>
    </>
  );
};

export default MiddleContainer;
