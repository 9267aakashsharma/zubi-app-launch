import React from "react";
import { Logo } from "..";
import { RedirectURL } from "../../../constants";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="zubi-navbar">
      <Logo />
      <div className="links">
        <a href={RedirectURL.Blog}>Blogs</a>
        <a href={RedirectURL.Hiring}>Hiring</a>
        <button className="get-app">Get access to Zubi app</button>
      </div>
    </div>
  );
};

export default Navbar;
