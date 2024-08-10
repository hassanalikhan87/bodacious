import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({ text, author }) {
  return (
    <Wrapper className="purpleBg radius8 flexNullCenter flexColumn">
      <QuoteWrapper>
        <QuoteIcon />
      </QuoteWrapper>
      <p className="whiteColor font14" style={{ paddingBottom: "30px" }}>
        {text}
      </p>
      <p className="orangeColor font13" style={{ alignSelf: "flex-end" }}>
        <em>{author}</em>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 30px;
  margin: 30px 20px;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;
