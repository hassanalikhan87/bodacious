import React from "react";
import styled from "styled-components";
// Components
// import BlogBox from "../Elements/BlogBox";
// import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Testimonials({ data }) {
  const { id, mainHeading, description, testimonialsList } = data;
  return (
    <Wrapper id={id} className="whiteBg" style={{ padding: "50px 0" }}>
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">{mainHeading}</h1>
          <p className="font13 preLine">{description}</p>
        </HeaderInfo>
        <TestimonialSlider data={testimonialsList} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
