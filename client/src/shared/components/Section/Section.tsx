import React from "react";
import classNames from "classnames";
import { styleTheme } from "../../../App";
import "./Section.scss";

interface Props {
  child: React.ReactNode;
  bgColor?: string;
}

const Section = (props: Props) => {
  return (
    <div
      className={classNames("zubi-section", {
        bgSecondary: props.bgColor === "secondary",
      })}
      style={styleTheme}
    >
      {props.child}
    </div>
  );
};

export default Section;
