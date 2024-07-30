import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ data, sidebarOpen, toggleSidebar }) {
  const { main, side } = data;
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon className="whiteColor" />
          <h1 className="whiteColor font20">Bodacious Bulls</h1>
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        {main.map((nav, i) => {
          return (
            <li className="semiBold font15 pointer">
              <Link
                onClick={() => toggleSidebar(!sidebarOpen)}
                activeClass="active"
                className="whiteColor"
                style={{ padding: "10px 15px" }}
                to={nav.to}
                spy={true}
                smooth={true}
                offset={-60}
              >
                {nav.text}
              </Link>
            </li>
          );
        })}
      </UlStyle>
      <UlStyle className="flexNullenter">
        {side.map((nav, i) => {
          return (
            <li className="semiBold font15 pointer flexCenter">
              <a
                key={i}
                href={nav.href}
                className="radius8 lightBg"
                style={{ padding: "10px 15px" }}
              >
                {nav.text}
              </a>
            </li>
          );
        })}
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
