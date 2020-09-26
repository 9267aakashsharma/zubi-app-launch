import React from "react";
import { Assets } from "../../../constants";
import "./Logo.scss";

const Logo = () => {
  const logoUrl = Assets.ZUBI_LOGO_BLACK; //to be changed when theme is added
  return (
    <div className="zubi-logo">
      <img src={logoUrl} alt="zubi_logo" />
      <p>Zubi</p>
    </div>
  );
};

export default Logo;
