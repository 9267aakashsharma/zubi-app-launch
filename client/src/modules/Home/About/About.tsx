import React from "react";
import { Assets } from "../../../constants";
import "./About.scss";

const About = () => {
  return (
    <div className="zubi-about">
      <div className="zubi-static-bubbles">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <div className="image">
        <img src={Assets.AI} alt="AI" />
      </div>
      <div className="content">
        <p>
          At Zubi, you'll find a tech family that will serve you for life. A
          network of smart, kind, movers, shakers, and change makers that will
          help you plug into the awesome world of innovation and tech. Watch our
          digital events on changing jobs, workforce for the future, emerging
          technologies and how to adapt for tomorrow.
        </p>
      </div>
    </div>
  );
};

export default About;
