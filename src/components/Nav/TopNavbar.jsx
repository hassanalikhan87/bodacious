import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar({ data }) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const { main, side } = data;

  return (
    <>
      <Sidebar
        data={data}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon className="purpleColor" />
            <h1 className="font20 extraBold">Bodacious Bulls</h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            {main.map((nav, i) => {
              return (
                <li className="semiBold font15 pointer">
                  <Link
                    key={i}
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to={nav.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    {nav.text}
                  </Link>
                </li>
              );
            })}
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            {side.map((nav, i) => {
              return (
                <li className="semiBold font15 pointer flexCenter">
                  <a
                    key={i}
                    href={nav.href}
                    className="radius8 whiteColor tealBg"
                    style={{ padding: "10px 15px" }}
                  >
                    {nav.text}
                  </a>
                </li>
              );
            })}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
