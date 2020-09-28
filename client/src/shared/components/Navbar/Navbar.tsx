import React from "react";
import { Logo } from "..";
import { RedirectURL } from "../../../constants";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="zubi-navbar">
      <Logo />
      <div className="links">
        <a href={RedirectURL.Zubi.Blog}>Blogs</a>
        <a href={RedirectURL.Zubi.Hiring}>Hiring</a>
        <a className="get-app" href={RedirectURL.DownloadApp}>
          Get Zubi app
        </a>
      </div>
    </div>
  );
};

export default Navbar;
