import React from "react";
import "./Refer.scss";

const Refer = () => {
  return (
    <div className="zubi-refer">
      <div className="zubi-static-bubbles">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="stick"></div>
      </div>
      <div className="inner">
        <div className="content">
          <h1>
            <span>REFER</span> AND EARN
          </h1>
          <p>
            Earn up to Rs 5000 through Zubi refer a friend program Invite your
            friends to the Zubis app and get 100 Zubi credits for every
            successful referral. Earn reward for yourself and your friends.
          </p>
        </div>
        <div className="content">
          <h1>
            <span>LEARN</span> TO EARN
          </h1>
          <p>
            Earn 10$ worth of WazirX token on course completion. Zubi is making
            the Blockchain and crypto course videos available to you. In
            partnership with WazirX, we’re releasing a new course on
            Cryptocurrency and Blockchain and get started navigating the future.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refer;
