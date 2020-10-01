import React from "react";
import { Assets, RedirectURL } from "../../../constants";
import "./Industry.scss";

const Industry = () => {
  return (
    <div className="zubi-industry">
      <div className="content">
        <div className="inner-content">
          <h1>
            Straight From <span>Industry Leaders</span> to You. Nailed it
          </h1>
          <p>
            Our learning modules are skills-based, not time-based. Expect the
            best live-streamed content, asynchronous curriculum, industry-vetted
            group projects, and one-on-one coaching and career support – all
            tailored for your success.
          </p>
          <a href={RedirectURL.DownloadApp}>Download the APP</a>
        </div>
        <div className="inner-content">
          <h1>
            Investing In Your <span>Future</span> Learn Now, Pay Later!
          </h1>
          <p>
            Our paying model allows you to learn to code now and pay us back
            after you land a gig..You have the option to pay Rs0 until you have
            a job earning. We have flexible payment options that are aimed at
            helping you launch a career debt-free.
          </p>
          <a href={RedirectURL.DownloadApp}>Download the APP</a>
        </div>
        <div className="inner-content">
          <h1>
            Reach new <span>career</span> heights with Zubi
          </h1>
          <p>
            We believe people are more than resumes. Our technology uses better
            assessments to generate deeper insight & connect students to
            companies where they'll thrive. Create Video Resumes, Interact
            face-to-face with your potential hire & leave a stronger first
            impact. Our goal is to help you bring your best to every interaction
          </p>
          <a href={RedirectURL.DownloadApp}>Download the APP</a>
        </div>
      </div>
      <div className="image">
        <img src={Assets.TESTING} alt="TESTING" />
      </div>
    </div>
  );
};

export default Industry;
