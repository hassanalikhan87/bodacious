import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-scroll";
// Constants
import { MEDIA_QUERY } from "../../constants/styles/media-query";
import { COLOR } from "../../constants/styles/color";
import { TYPOGRAPHY } from "../../constants/styles/typography";
import CallToAction from "../Buttons/CallToAction";

export default function Sidebar({ data, sidebarOpen, toggleSidebar }) {
  const { main, side } = data;
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);
  return (
    <Wrapper sidebarOpen={sidebarOpen} $top={y > 100 ? "60px" : "80px"}>
      <NavContainer className="flexNullCenter flexColumn">
        {main.map((nav, i) => {
          return (
            <StyledLink
              key={i}
              onClick={() => toggleSidebar(!sidebarOpen)}
              activeClass="active_mobile"
              className="whiteColor"
              style={{ padding: "10px 15px" }}
              to={nav.to}
              spy={true}
              smooth={true}
              offset={-60}
            >
              {nav.text}
            </StyledLink>
          );
        })}
      </NavContainer>
      <NavContainer className="flexNullCenter flexColumn">
        {side.map((cta, i) => {
          return (
            <CallToAction
              key={i}
              title={cta.text}
              destination={"portfolio"}
              offset={80}
              border={"none"}
              backgroundcolor={COLOR.fatLight}
              color={COLOR.fatDark}
            />
          );
        })}
      </NavContainer>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  max-width: 500px;
  height: 100%;
  position: fixed;
  ${({ $top }) =>
    $top &&
    css`
      top: ${$top};
    `}
  padding: 0;
  right: -500px;
  transition: transform 0.5s linear;
  transform: ${(props) => (props.sidebarOpen ? "translateX(-500px)" : "none")};
  z-index: 9999;
  background-color: ${COLOR.fatRed};
  ${MEDIA_QUERY.above.desktop} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  ${TYPOGRAPHY.navLink}
  font-size: 14px;
`;
const NavContainer = styled.div`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
