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
import CompanyCover from "../../assets/img/company-cover.png";

export default function Company({ data }) {
  const { id, mainHeading, description, cta, clientsList } = data;
  return (
    <Wrapper id={id}>
      <Container>
        <LeftSide>
          <Heading>{mainHeading}</Heading>
          <Description>{description}</Description>
          <CallToAction
            title={cta.text}
            destination={"portfolio"}
            border={"none"}
            backgroundcolor={COLOR.boltBlack}
            color={COLOR.lighteningYellow}
          />
        </LeftSide>
        <RightSide>
          <Image src={CompanyCover} />
          <SvgWrapper>
            <Bull />
          </SvgWrapper>
        </RightSide>
      </Container>
      <SliderContainer id={id}>
        <ClientSlider data={clientsList} />
      </SliderContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  flex-direction: column;
  background-color: ${COLOR.midGrey};
  min-height: calc(100vh - 80px);
  margin-top: 80px;
    ${MEDIA_QUERY.above.desktop} {
    min-height: 100vh;
    margin-top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${SPACING.s2};
  ${MEDIA_QUERY.above.desktop} {
    flex-direction: row;
    gap: 20px;
    height: 100vh;
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
    margin-top: 0;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
  margin-top: ${SPACING.s5};
  ${MEDIA_QUERY.above.desktop} {
    margin: 0;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  order: 1;
  text-align: -webkit-center;
  margin: 80px auto 0;
  position: relative;
  ${MEDIA_QUERY.above.desktop} {
    margin: 180px auto 0;
  }
  ${MEDIA_QUERY.above.desktop} {
    flex: 2;
    order: unset;
    width: unset;
    position: unset;
  }
`;

const SvgWrapper = styled.div`
  z-index: 1;
  color: ${COLOR.lighteningYellow};
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  svg {
    max-height: 25vh;
    max-width: calc(100vw - 90px);
  }
  ${MEDIA_QUERY.above.smallMobile} {
    svg {
      max-height: 30vh;
    }
  }
  ${MEDIA_QUERY.above.mobile} {
    svg {
      max-height: 40vh;
    }
  }
  ${MEDIA_QUERY.above.tablet} {
    svg {
      max-height: 44vh;
      max-width: 80vw;
    }
  }
  ${MEDIA_QUERY.above.desktop} {
    top: unset;
    left: unset;
    bottom: 0;
    right: 0;
    margin: unset;
    svg {
      max-height: 80vh;
      max-width: unset;
    }
  }
  ${MEDIA_QUERY.above.largeDesktop} {
    right: 60px;
    svg {
      max-height: calc(100vh - 90px);
    }
  }
`;

const Description = styled.p`
  ${TYPOGRAPHY.p}
  color: ${COLOR.fatDark};
  padding: ${SPACING.s2} 0;
  ${MEDIA_QUERY.above.desktop} {
    padding: 40px 0;
  }
  ${MEDIA_QUERY.above.largeDesktop} {
    padding: 80px 0;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${COLOR.lightGrey};
  padding: ${SPACING.s10} 0;
  ${MEDIA_QUERY.above.desktop} {
    position: absolute;
    width: 100vw;
    bottom: 0;
  }
`;

const Image = styled.img`
  position: relative;
  z-index: 2;
  width: 60%;
  ${MEDIA_QUERY.above.desktop} {
    margin: 0 0 180px;
    width: 100%;
  }
  ${MEDIA_QUERY.above.largeDesktop} {
    width: 70%;
  }
`;
