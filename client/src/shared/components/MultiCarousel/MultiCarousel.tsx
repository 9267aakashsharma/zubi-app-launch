import React from "react";
import "./MultiCarousel.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselData } from "../../../modules/Home/Screens/Screens";

interface Props {
  itemData: CarouselData[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiCarousel = (props: Props) => {
  return (
    <div className="zubi-carousel">
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        arrows={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {props.itemData.map((item: CarouselData, index: number) => {
          return (
            <div className="zubi-carousel-item" key={index}>
              <img src={item.imgURL} alt={`item${index}`} />
              <p>{item.data}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
