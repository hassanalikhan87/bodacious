import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import TestimonialBox from "../Elements/TestimonialBox";
import styled from "styled-components";

export default function TestimonialSlider({ data }) {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    pauseOnHover: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <StyledSlider {...settings}>
        {data.map((testimonial, i) => {
          return <TestimonialBox key={i} {...testimonial} />;
        })}
      </StyledSlider>
    </div>
  );
}

const StyledSlider = styled(Slider)`
  @media (min-width: 860px) {
    button {
      &:before {
        color: #7620ff;
        opacity: 1;
      }
    }
  }
`;
