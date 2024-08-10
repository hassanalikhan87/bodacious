import React from "react";
import styled from "styled-components";
// Assets
import SoftwareDevIcon from "../../assets/svg/Services/SoftwareDevIcon";
import WebDevelopmentIcon from "../../assets/svg/Services/WebDevelopmentIcon";
import MobileDevIcon from "../../assets/svg/Services/MobileDevIcon";
import DigitalStrategyIcon from "../../assets/svg/Services/DigitalStrategyIcon";
import VideoCallIcon from "../../assets/svg/Services/VideoCallIcon";
import ProductDesignIcon from "../../assets/svg/Services/ProductDesign";

import { COLOR } from "../../constants/styles/color";
import { TYPOGRAPHY } from "../../constants/styles/typography";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "software":
      getIcon = <SoftwareDevIcon />;
      break;
    case "web-development":
      getIcon = <WebDevelopmentIcon />;
      break;
    case "mobile":
      getIcon = <MobileDevIcon />;
      break;
    case "strategy":
      getIcon = <DigitalStrategyIcon />;
      break;
    case "design":
      getIcon = <ProductDesignIcon />;
      break;
    case "teams":
      getIcon = <VideoCallIcon />;
      break;
    default:
      getIcon = <SoftwareDevIcon />;
      break;
  }

  return (
    <Wrapper className="test">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle>{title}</TitleStyle>
      <SubtitleStyle>{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${COLOR.fatLight};
`;
const IconStyle = styled.div`
  margin: 0 auto;
`;
const TitleStyle = styled.h2`
  ${TYPOGRAPHY.h2}
  width: 100%;
  max-width: 300px;
  margin: 40px 0;
  @media (max-width: 860px) {
    margin: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  ${TYPOGRAPHY.p}
  width: 100%;
  margin: 0;
`;
