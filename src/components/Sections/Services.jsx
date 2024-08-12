import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
import { SIZE } from "../../constants/styles/sizes";
import { SPACING } from "../../constants/styles/spacing";
import { COLOR } from "../../constants/styles/color";
import { MEDIA_QUERY } from "../../constants/styles/media-query";
import { TYPOGRAPHY } from "../../constants/styles/typography";

export default function Services({ data }) {
  const { id, mainHeading, description, servicesList } = data;
  return (
    <Wrapper id={id}>
      <ServicesContainer>
        <HeaderInfo>
          <Heading>{mainHeading}</Heading>
          <Description>{description}</Description>
        </HeaderInfo>
        <ServiceBoxRow>
          {servicesList.map((service, i) => {
            return (
              <ServiceBoxWrapper key={i}>
                <ServiceBox {...service} />
              </ServiceBoxWrapper>
            );
          })}
        </ServiceBoxRow>
      </ServicesContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.fatDark};
  min-height: calc(100vh - 80px);
  ${MEDIA_QUERY.above.desktop} {
    margin: 0 auto;
    align-items: center;
  }
`;

const ServicesContainer = styled.div`
  padding: 0 ${SPACING.s2};
  max-width: ${SIZE.maxWidth};

  ${MEDIA_QUERY.above.desktop} {
    padding: 0 ${SPACING.s15};
  }
`;
const ServiceBoxRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: unset;
  align-items: center;
  justify-content: space-between;
  ${MEDIA_QUERY.above.desktop} {
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 70%;
  margin: 10px 0;
  padding: ${SPACING.s5};

  ${MEDIA_QUERY.above.desktop} {
    margin: 10px 0;
    flex: 33%;
    max-width: 25%;
  }
`;
const HeaderInfo = styled.div`
  text-align: center;
  ${MEDIA_QUERY.above.desktop} {
    text-align: left;
  }
`;
const Heading = styled.h1`
  ${TYPOGRAPHY.h1}
  color: ${COLOR.fatLight};
  background-color: ${COLOR.fatRed};
  margin: ${SPACING.s4} 0;
  padding: ${SPACING.s4};
  width: 25vw;
`;

const Description = styled.p`
  ${TYPOGRAPHY.p}
  color: ${COLOR.fatLight};
  padding: ${SPACING.s4} 0;
  ${MEDIA_QUERY.above.desktop} {
    padding: ${SPACING.s15} 0;
  }
`;
