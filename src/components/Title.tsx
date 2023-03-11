import React from "react";
import { titleTextProps } from "../interfaces/componentTypes";

const Title = ({ titleText }: titleTextProps) => {
  return <h1 className="titleText">{titleText}</h1>;
};

export default Title;
