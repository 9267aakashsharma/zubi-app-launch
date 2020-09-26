import React from "react";
import "./Section.scss";

interface Props {
  child: React.ReactNode;
}

const Section = (props: Props) => {
  return <div className="zubi-section">{props.child}</div>;
};

export default Section;
