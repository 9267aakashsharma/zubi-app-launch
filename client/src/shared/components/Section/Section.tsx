import React from "react";
import classNames from "classnames";
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
    >
      {props.child}
    </div>
  );
};

export default Section;
