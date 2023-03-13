import { NavLink, Outlet } from "react-router-dom";

import IconNavHome from "../svgIcons/IconNavHome";
import IconNavMovies from "../svgIcons/IconNavMovies";
import IconNavTvSeries from "../svgIcons/IconNavTvSeries";
import IconNavBookmark from "../svgIcons/IconNavBookmark";
import IconNavLogo from "../assets/logo.svg";

import Avatar from "../assets/image-avatar.png";

const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <img src={IconNavLogo}></img>
        <div className="mainIconsContainer">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
          >
            <IconNavHome className="navbarIcon" fill="#5A698F"/>
          </NavLink>
          <NavLink to="/movies">
            <IconNavMovies className="navbarIcon" fill="#5A698F"/>
          </NavLink>
          <NavLink to="/tvshows">
            <IconNavTvSeries className="navbarIcon" fill="#5A698F"/>
          </NavLink>
          <NavLink to="/bookmark">
            <IconNavBookmark className="navbarIcon" fill="#5A698F"/>
          </NavLink>
        </div>
        <img className="avatarImg" src={Avatar}></img>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
