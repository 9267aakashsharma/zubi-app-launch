import React from "react";
import { Assets, RedirectURL } from "../../../constants";
import { Bubbles, Navbar } from "../../../shared/components";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="zubi-hero">
      <Navbar />
      <div className="hero-inner">
        <div className="content">
          <h1>
            The <span>Modern Community</span> Platform For New Age Learners
          </h1>
          <small>
            online learning built to get you a high-paying job in emerging tech.
            learning, mentorship, career services, and ZERO in tuition until
            you've started your new career.
          </small>
          <a className="download" href={RedirectURL.DownloadApp}>
            Download App
          </a>
        </div>
        <div className="image">
          <Bubbles />
          <div className="hero-img-phone-screen">
            <img src={Assets.HERO_IMG} alt="HERO_IMG" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
