import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBookmarkedData } from "../store/actions";
import { useLocation } from "react-router-dom";
import { categoriesObjLiteralInterface } from "../interfaces/componentTypes";

export const useBookmarkFunctionality = (isBookmarked: boolean) => {
  const [isActiveObj, setIsActive] = useState(isBookmarked);
  const dispatch = useDispatch();

  const handleOnClickBookmarkIcon = (
    isActiveBoolean: boolean,
    title: string
  ) => {
    dispatch(
      updateBookmarkedData({ title, isBookmarkedBoolean: isActiveBoolean })
    );
    setIsActive(isActiveBoolean);
  };

  return { isActiveObj, handleOnClickBookmarkIcon };
};

export const useObjectLiteral = (arrObjectProperties: string[]) => {
  const [firstProp, secProp, thirdProp, fourthProp] = arrObjectProperties;

  const objectLiteral: categoriesObjLiteralInterface = {
    home: firstProp,
    movies: secProp,
    tvshows: thirdProp,
    bookmark: fourthProp,
  };

  return { objectLiteral };
};
