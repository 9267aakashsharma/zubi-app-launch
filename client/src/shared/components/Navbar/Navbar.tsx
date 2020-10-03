import React from "react";
import { Logo } from "..";
import { RedirectURL } from "../../../constants";
import classNames from "classnames";
import "./Navbar.scss";

interface Props {
  theme?: string;
  toggleTheme: () => void;
}

const Navbar = (props: Props) => {
  return (
    <div className="zubi-navbar">
      <Logo theme={props.theme} />
      <div className="links">
        <div
          className={classNames("toggle-theme", {
            invert: props.theme !== "light",
          })}
          onClick={props.toggleTheme}
        >
          <div className="ball"></div>
          <div className="text">
            {(props.theme === "light" ? "dark" : "light") || "dark"}
          </div>
        </div>
        <a href={RedirectURL.Zubi.Hiring}>Hiring</a>
        <a className="get-app" href={RedirectURL.DownloadApp}>
          Get Zubi app
        </a>
      </div>
    </div>
  );
};

export default Navbar;
