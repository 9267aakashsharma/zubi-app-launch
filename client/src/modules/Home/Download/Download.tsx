import React from "react";
import Lottie from "react-lottie";
import { Assets, RedirectURL } from "../../../constants";
import "./Download.scss";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Assets.BOT,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Download = () => {
  return (
    <div className="zubi-download">
      <div className="image">
        <Lottie options={defaultOptions} isStopped={false} isPaused={false} />
      </div>
      <div className="content">
        <h1>
          What are you <span>waiting</span> for?
        </h1>
        <p>Push yourself because no one else is going to do it for you.</p>
        <a href={RedirectURL.DownloadApp}>Download Now</a>
      </div>
    </div>
  );
};

export default Download;
