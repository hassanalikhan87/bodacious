import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import BurgerIcon from "../../assets/svg/BurgerIcon";
import CloseIcon from "../../assets/svg/CloseIcon";
// Constants
import { SPACING } from "../../constants/styles/spacing";
import { TYPOGRAPHY } from "../../constants/styles/typography";
import { COLOR } from "../../constants/styles/color";
import { MEDIA_QUERY } from "../../constants/styles/media-query";
import { SIZE } from "../../constants/styles/sizes";
import BodaciousLogo from "../Elements/BodaciousLogo";

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
      <Wrapper style={{ height: "80px" }}>
        <NavInner>
          <BodaciousLogo logoText="bodaciousbulls" path="companyy" />
          <BurgerButton onClick={() => toggleSidebar(!sidebarOpen)}>
            {!sidebarOpen ? <BurgerIcon /> : <CloseIcon />}
          </BurgerButton>
          <UlWrapper>
            {main.map((nav, i) => {
              return (
                <StyledLink
                  key={i}
                  activeClass="active"
                  to={nav.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  <h1>{nav.text}</h1>
                </StyledLink>
              );
            })}
          </UlWrapper>
          <UlWrapperRight>
            {side.map((nav, i) => {
              return (
                <a key={i} href={nav.href}>
                  {nav.text}
                </a>
              );
            })}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

// const LogoLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   color: ${COLOR.fatLight};
//   padding: ${SPACING.s2} ${SPACING.s4};
//   background-color: ${COLOR.fatRed};
//   cursor: pointer;
//   strong {
//     ${TYPOGRAPHY.logo}
//   }
//
// `;

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${COLOR.boltBlack};
  ${MEDIA_QUERY.above.desktop} {
    background-color: ${COLOR.midGrey};
  }
`;
const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: ${SIZE.maxWidth};
  ${MEDIA_QUERY.above.desktop} {
    padding: 0px ${SPACING.s15};
  }
`;
const BurgerButton = styled.button`
  display: block;
  outline: none;
  border: 0px;
  background-color: transparent;
  color: ${COLOR.fatLight};
  height: 100%;
  padding: 0 15px;
  ${MEDIA_QUERY.above.desktop} {
    display: none;
  }
`;

const UlWrapper = styled.div`
  display: none;
  ${MEDIA_QUERY.above.desktop} {
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  ${TYPOGRAPHY.navLink}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${SPACING.s4};
  border-bottom: 2px solid transparent;
  height: 100%;
  color: ${COLOR.boltBlack};
  cursor: pointer;
  &:active,
  &:hover,
  &:focus {
    color: ${COLOR.lighteningYellow};
    border-bottom: 2px solid ${COLOR.lighteningYellow};
  }
`;

const UlWrapperRight = styled.ul`
  display: none;
  ${MEDIA_QUERY.above.desktop} {
    display: flex;
    align-items: center;
    a {
      ${TYPOGRAPHY.navLink}
      text-decoration: none;
      color: ${COLOR.lighteningYellow};
      background-color: ${COLOR.boltBlack};
      padding: ${SPACING.s2} ${SPACING.s4};
      border-radius: 10px;
      &:hover {
        background-color: ${COLOR.lighteningYellow};
        color: ${COLOR.boltBlack};
      }
    }
  }
`;
