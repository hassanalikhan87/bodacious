import React from "react";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/logo01.svg";
import ClientLogo02 from "../../assets/img/clients/logo02.svg";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";
import ClientLogo06 from "../../assets/img/clients/logo06.svg";
import Marquee from "react-fast-marquee";

export default function ClientSlider() {
  return (
    <Marquee pauseOnHover={true} pauseOnClick={true}>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo01} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo02} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo03} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo04} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo05} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo06} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo03} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo04} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo01} alt="client logo" />
      </LogoWrapper>
      <LogoWrapper className="flexCenter">
        <ImgStyle src={ClientLogo02} alt="client logo" />
      </LogoWrapper>
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
