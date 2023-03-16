import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import IconInputSearch from "../svgIcons/IconInputSearch";
import { useObjectLiteral } from "../customHooks";
import SearchResultsContainer from "./SearchResultsContainer";
import { useSelector } from "react-redux";
import { initialStateInterface } from "../interfaces/redux";

const InputSearch = () => {
  const allData = useSelector((state: initialStateInterface[]) => state);
  let { pathname } = useLocation();
  const [inputValue, setInputValue] = useState<string>();
  pathname = pathname === "/" ? "home" : pathname.substring(1);

  const onChangeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const arrObjLit = [
    "movies or TV series",
    "a movie",
    "a TV Serie",
    "bookmarked shows",
  ];
  const { objectLiteral } = useObjectLiteral(arrObjLit);

  return (
    <>
      <div className="inputSearchContainer">
        <IconInputSearch className="iconInputSearch" />
        <input
          type="text"
          onChange={onChangeInputSearch}
          placeholder={`Search for ${objectLiteral[pathname]}`}
        />
      </div>
      {!inputValue?.length ? (
        <Outlet />
      ) : (
        <SearchResultsContainer
          inputValue={inputValue}
          pathname={pathname}
          data={allData}
        />
      )}
    </>
  );
};

export default InputSearch;
