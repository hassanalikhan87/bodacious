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
// import CoverImage from "../../assets/svg/Company/CoverImage";

export default function Company({ data }) {
  const { id, mainHeading, description, cta, quote } = data;
  return (
    <Wrapper id={id}>
      <LeftSide>
        <div>
          <Heading>{mainHeading}</Heading>
          <Description>{description}</Description>
          <CallToAction
            title={cta.text}
            destination={"portfolio"}
            offset={80}
            border={"none"}
            backgroundcolor={COLOR.fatRed}
            color={COLOR.fatLight}
          />
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
          {/* <CoverImage /> */}
          <Img src={HeaderImage} alt="office" />
          <QuoteWrapper>
            <QuotesWrapper>
              <StyledQuotesIcon />
            </QuotesWrapper>
            <div>
              <p>
                <Quote>{quote.text}</Quote>
              </p>
              <Author>{quote.author}</Author>
            </div>
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 ${SPACING.s2};
  background-color: ${COLOR.fatLight};
  min-height: 100vh;
  ${MEDIA_QUERY.above.desktop} {
    flex-direction: row;
    gap: 20px;
    max-width: ${SIZE.maxWidth};
    margin: 0 auto;
    padding: 0 ${SPACING.s15};
  }
`;
const LeftSide = styled.div`
  order: 2;
  text-align: center;
  ${MEDIA_QUERY.above.desktop} {
    flex: 2;
    margin-top: 100px;
    justify-content: flex-start;
    text-align: left;
    order: unset;
    width: auto;
    padding: 0 ${SPACING.s20} 0 0;
  }
`;
const Heading = styled.h1`
  ${TYPOGRAPHY.h1}
  color: ${COLOR.fatDark};
  padding: 0 0 ${SPACING.s4} 0;
`;

const RightSide = styled.div`
  display: block;
  margin: 100px auto 0;
  order: 1;
  text-align: -webkit-center;
  ${MEDIA_QUERY.above.desktop} {
    flex: 3;
    order: unset;
    width: unset;
  }
`;
const Description = styled.p`
  ${TYPOGRAPHY.p}
  color: ${COLOR.fatDark};
  padding: ${SPACING.s4} 0;
  ${MEDIA_QUERY.above.desktop} {
    padding: ${SPACING.s15} 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 9;
  height: fit-content;
  width: fit-content;
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const StyledQuotesIcon = styled(QuotesIcon)`
  color: ${COLOR.fatGreen};
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: -5px;
  bottom: 50px;
  border-radius: 25px;
  z-index: 99;
  max-width: 70%;
  text-align: left;
  background-color: ${COLOR.fatDark};
  padding: ${SPACING.s4};
  ${MEDIA_QUERY.above.smallMobile} {
    left: -75px;
  }

  color: ${COLOR.fatLight};
  ${MEDIA_QUERY.above.desktop} {
    left: -20%;
    padding: ${SPACING.s8};
    max-width: 330px;
  }
`;

const Quote = styled.em`
  align-self: left;
`;
const Author = styled.p`
  text-align: right;
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: 0px;
  top: -10px;
  color: ${COLOR.fatLight};
  ${MEDIA_QUERY.above.desktop} {
    left: -20px;
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -50px;
  bottom: 100px;
  z-index: -1;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
