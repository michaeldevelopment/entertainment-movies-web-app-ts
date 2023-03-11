import React from "react";
import { recommendedForYouContainerProps } from "../interfaces/componentTypes";
import Title from "./Title";
import CardSm from "./CardSm";

const RecommendedForYouContainer = ({
  recommendedData,
}: recommendedForYouContainerProps) => {
  return (
    <>
      <Title titleText={"Recommended for you"} />
      <div className="recommendedForYouContainer">
        {recommendedData &&
          recommendedData.map((elementProps, index) => (
            <CardSm {...elementProps} key={index} />
          ))}
      </div>
    </>
  );
};

export default RecommendedForYouContainer;
