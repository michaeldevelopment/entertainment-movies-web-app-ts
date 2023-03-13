import IconMovie from "../assets/icon-category-movie.svg";
import IconTv from "../assets/icon-category-tv.svg";

import { iconDescriptionProps } from "../interfaces/componentTypes";

const IconDescription = ({ iconType }: iconDescriptionProps) => {
  return iconType === "Movie" ? <img src={IconMovie} /> : <img src={IconTv} />;
};

export default IconDescription;
