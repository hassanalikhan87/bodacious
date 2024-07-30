import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider({ data }) {
  return (
    <div>
      <Marquee speed={250} pauseOnHover autoFill>
        {data.map((testimonial, i) => {
          return (
            <LogoWrapper className="flexCenter">
              <TestimonialBox {...testimonial} />
            </LogoWrapper>
          );
        })}
      </Marquee>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  margin: 0 30px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
