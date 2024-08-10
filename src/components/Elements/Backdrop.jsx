import React from "react";
import styled from "styled-components";
import { COLOR } from "../../constants/styles/color";
import { MEDIA_QUERY } from "../../constants/styles/media-query";

export default function Backdrop({ toggleSidebar }) {
  return <Wrapper onClick={() => toggleSidebar(false)}></Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${COLOR.fatDark};
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
  ${MEDIA_QUERY.above.desktop} {
    display: none;
  }
`;
