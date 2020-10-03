import React from "react";
import { Assets } from "../../../constants";
import "./Logo.scss";

interface Props {
  theme?: string;
  title?: null;
}

const Logo = (props: Props) => {
  let logoUrl = Assets.ZUBI_LOGO_BLACK;
  if (props.theme) {
    logoUrl =
      props.theme === "light"
        ? Assets.ZUBI_LOGO_BLACK
        : Assets.ZUBI_LOGO_WHITE_SVG;
  }
  return (
    <div className="zubi-logo">
      <img src={logoUrl} alt="zubi_logo" />
      {props.title !== null && <p>Zubi</p>}
    </div>
  );
};

export default Logo;
