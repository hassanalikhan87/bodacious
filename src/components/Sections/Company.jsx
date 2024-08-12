import React from "react";
import styled from "styled-components";
// Components
import CallToAction from "../Buttons/CallToAction";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { COLOR } from "../../constants/styles/color";
import { MEDIA_QUERY } from "../../constants/styles/media-query";
import { SPACING } from "../../constants/styles/spacing";
import { SIZE } from "../../constants/styles/sizes";
import { TYPOGRAPHY } from "../../constants/styles/typography";
import ClientSlider from "../Elements/ClientSlider";
// import CoverImage from "../../assets/svg/Company/CoverImage";
import Bull from "../../assets/svg/Bull";

export default function Company({ data }) {
  const { id, mainHeading, description, cta, quote, clientsList } = data;
  return (
    <Wrapper id={id}>
      <Container>
        <LeftSide>
          <div>
            <Heading>{mainHeading}</Heading>
            <Description>{description}</Description>
            <CallToAction
              title={cta.text}
              destination={"portfolio"}
              offset={80}
              border={"none"}
              backgroundcolor={COLOR.boltBlack}
              color={COLOR.lighteningYellow}
            />
          </div>
        </LeftSide>
        <RightSide></RightSide>
        <SvgWrapper>
          <Bull />
        </SvgWrapper>
      </Container>
      <SliderContainer id={id}>
        <ClientSlider data={clientsList} />
      </SliderContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${COLOR.midGrey};
  min-height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${SPACING.s2};
  ${MEDIA_QUERY.above.desktop} {
    flex-direction: row;
    gap: 20px;
    max-width: ${SIZE.maxWidth};
    margin: 0 auto;
    padding: 0 ${SPACING.s15};
  }
`;

const LeftSide = styled.div`
  position: relative;
  z-index: 2;
  order: 2;
  text-align: center;
  ${MEDIA_QUERY.above.desktop} {
    flex: 1;
    margin-top: 100px;
    margin-bottom: 0;
    justify-content: flex-start;
    text-align: left;
    order: unset;
    width: auto;
    padding: 0 ${SPACING.s20} 0 0;
  }
`;
const Heading = styled.h1`
  ${TYPOGRAPHY.h1}
  color: ${COLOR.boltBlack};
  padding: 0;
  width: 100%;
`;

const RightSide = styled.div`
  display: block;
  margin: 100px auto 0;
  order: 1;
  text-align: -webkit-center;
  ${MEDIA_QUERY.above.desktop} {
    flex: 2;
    order: unset;
    width: unset;
  }
`;

const SvgWrapper = styled.div`
  z-index: 1;
  color: ${COLOR.lighteningYellow};
  position: absolute;
  bottom: 0;
  right: 0;
  svg {
    max-height: calc(100vh - 90px);
  }
  ${MEDIA_QUERY.above.desktop} {
  }
`;

const Description = styled.p`
  ${TYPOGRAPHY.p}
  color: ${COLOR.fatDark};
  padding: ${SPACING.s4} 0;
  ${MEDIA_QUERY.above.desktop} {
    padding: ${SPACING.s5} 0;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${COLOR.lightGrey};
  padding: ${SPACING.s10} 0;
`;
