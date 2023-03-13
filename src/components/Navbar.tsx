import { NavLink, Outlet } from "react-router-dom";

import IconNavHome from "../assets/icon-nav-home.svg";
import IconNavMovies from "../assets/icon-nav-movies.svg";
import IconNavTvSeries from "../assets/icon-nav-tv-series.svg";
import IconNavBookmark from "../assets/icon-nav-bookmark.svg";
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
            <IconNavHome />
            <img src={IconNavHome} />
          </NavLink>
          <NavLink to="/movies">
            <img src={IconNavMovies} />
          </NavLink>
          <NavLink to="/tvshows">
            <img src={IconNavTvSeries} />
          </NavLink>
          <NavLink to="/bookmark">
            <img src={IconNavBookmark} />
          </NavLink>
        </div>
        <img className="avatarImg" src={Avatar}></img>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
