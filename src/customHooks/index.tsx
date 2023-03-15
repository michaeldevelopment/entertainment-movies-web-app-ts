import React, { useState }from 'react'
import { useDispatch } from 'react-redux';
import { updateBookmarkedData } from '../store/actions';

export const useBookmarkFunctionality = (isBookmarked: boolean) => {
  const [ isActiveObj, setIsActive ] = useState(isBookmarked);
  const dispatch = useDispatch();

  const handleOnClickBookmarkIcon = (isActiveBoolean: boolean, title: string) => {
    dispatch(updateBookmarkedData({ title, isBookmarkedBoolean: isActiveBoolean }));
    setIsActive(isActiveBoolean);
  };

  return { isActiveObj,  handleOnClickBookmarkIcon };
};
