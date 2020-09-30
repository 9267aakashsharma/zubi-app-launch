import React from "react";
import { Assets, RedirectURL } from "../../../constants";
import "./Industry.scss";

const Industry = () => {
  return (
    <div className="zubi-industry">
      <div className="content">
        <h1>
          Straight From <span>Industry Leaders</span> to You. Nailed it
        </h1>
        <p>
          Our learning modules are skills-based, not time-based. Expect the best
          live-streamed content, asynchronous curriculum, industry-vetted group
          projects, and one-on-one coaching and career support – all tailored
          for your success.
        </p>
        <a href={RedirectURL.DownloadApp}>Download the APP</a>
      </div>
      <div className="image">
        <img src={Assets.TESTING} alt="TESTING" />
      </div>
    </div>
  );
};

export default Industry;
