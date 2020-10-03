import React from "react";
import { Assets, RedirectURL } from "../../../constants";
import "./Events.scss";

const Events = () => {
  return (
    <div className="zubi-events">
      <div className="zubi-static-bubbles">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <div className="content">
        <h1>
          Test your <span>emerging technology</span> skill now?{" "}
        </h1>
        <p>
          Learn from Pro and build a project with a professional mentor. Prepare
          for interviews, polish your resume, and get hired by emerging
          technology companies faster. Our mentors help you get more interviews
          and ace them for top tech companies and emerging technology roles.
        </p>
        <a className="download" href={RedirectURL.DownloadApp}>
          Test Skills
        </a>
      </div>
      <div className="image">
        <img src={Assets.PHONE_EVENT} alt="PHONE_EVENT" />
      </div>
    </div>
  );
};

export default Events;
