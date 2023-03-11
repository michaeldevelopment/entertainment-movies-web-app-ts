import React from "react";
import { navbarProps } from "../interfaces/componentTypes";

const Navbar = ({ children }: navbarProps) => {
  return (
    <>
      <div> Navbar </div>
      {children}
    </>
  );
};

export default Navbar;
