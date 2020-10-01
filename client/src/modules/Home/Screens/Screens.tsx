import React from "react";
import { Assets } from "../../../constants";
import { MultiCarousel } from "../../../shared/components";
import "./Screens.scss";

export interface CarouselData {
  imgURL: string;
  data: string;
}

const carouselData: CarouselData[] = [
  {
    imgURL: Assets.MOCKS.HOME,
    data:
      "Learn the digital skills you need to succeed, Live Online from anywhere in the world.",
  },
  {
    imgURL: Assets.MOCKS.EVENT,
    data:
      "Don’t settle for a boring job. Or your current salary. At Zubi, our goal is to provide you with comprehensive, accelerated training that will land you a job as a emerging tech developer earning better with happy faces",
  },
  {
    imgURL: Assets.MOCKS.ASSESS,
    data:
      "Zubi is a Tech-ed platform which aims to bridge the gap between the industry and academia by providing an innovative way to get up skilled in emerging technology",
  },
  {
    imgURL: Assets.MOCKS.JOBS,
    data:
      "Learn the digital skills you need to succeed, Live Online from anywhere in the world.",
  },
  {
    imgURL: Assets.MOCKS.PROFILE,
    data:
      "Don’t settle for a boring job. Or your current salary. At Zubi, our goal is to provide you with comprehensive, accelerated training that will land you a job as a emerging tech developer earning better with happy faces",
  },
  {
    imgURL: Assets.MOCKS.LOGIN,
    data:
      "Zubi is a Tech-ed platform which aims to bridge the gap between the industry and academia by providing an innovative way to get up skilled in emerging technology",
  },
];

const Screens = () => {
  return (
    <div className="zubi-screens">
      <div className="zubi-static-bubbles">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
      </div>
      <MultiCarousel itemData={carouselData} />
    </div>
  );
};

export default Screens;
