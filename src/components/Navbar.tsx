import { NavLink, Outlet, useLocation } from "react-router-dom";

import IconNavHome from "../svgIcons/IconNavHome";
import IconNavMovies from "../svgIcons/IconNavMovies";
import IconNavTvSeries from "../svgIcons/IconNavTvSeries";
import IconNavBookmark from "../svgIcons/IconNavBookmark";
import IconNavLogo from "../assets/logo.svg";

import Avatar from "../assets/image-avatar.png";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="navbarContainer">
        <img src={IconNavLogo}></img>
        <div className="mainIconsContainer">
          <NavLink to="/">
            <IconNavHome
              className={`navbarIcon ${pathname === "/" ? "active" : ""}`}
              fill="#5A698F"
            />
          </NavLink>
          <NavLink to="/movies">
            <IconNavMovies
              className={`navbarIcon ${
                pathname.includes("movies") ? "active" : ""
              }`}
              fill="#5A698F"
            />
          </NavLink>
          <NavLink to="/tvshows">
            <IconNavTvSeries
              className={`navbarIcon ${
                pathname.includes("tvshows") ? "active" : ""
              }`}
              fill="#5A698F"
            />
          </NavLink>
          <NavLink to="/bookmark">
            <IconNavBookmark
              className={`navbarIcon ${
                pathname.includes("bookmark") ? "active" : ""
              }`}
              fill="#5A698F"
            />
          </NavLink>
        </div>
        <img className="avatarImg" src={Avatar}></img>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
