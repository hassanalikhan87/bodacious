import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

export default function ClientSlider({ data }) {
  return (
    <Marquee speed={250} pauseOnHover autoFill>
      {data.map((img, i) => {
        return (
          <LogoWrapper key={i} className="flexCenter">
            <ImgStyle {...img} />
          </LogoWrapper>
        );
      })}
    </Marquee>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;
