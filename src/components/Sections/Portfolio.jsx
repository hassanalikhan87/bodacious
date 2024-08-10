import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Button } from "react-scroll";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import { SPACING } from "../../constants/styles/spacing";
import { MEDIA_QUERY } from "../../constants/styles/media-query";
import { SIZE } from "../../constants/styles/sizes";
import { COLOR } from "../../constants/styles/color";
// Assets
// import AddImage2 from "../../assets/img/add/add2.png";

export default function Portfolio({ data }) {
  const { id, mainHeading, description, projectsList } = data;
  const [projectsCount, setProjectsCount] = useState(6);
  const portfolioRef = useRef(null);

  const handleShowMore = () => {
    setProjectsCount(projectsList.length);
  };
  const handleShowLess = () => {
    setProjectsCount(6);
  };

  return (
    <Wrapper id={id} ref={portfolioRef}>
      <Container className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{mainHeading}</h1>
            <p className="font13 preLine">{description}</p>
          </HeaderInfo>
          <div className="row textCenter">
            {projectsList.map((project, i) => {
              if (i < projectsCount) {
                return (
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" key={i}>
                    <ProjectBox action={() => alert("clicked")} {...project} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {projectsCount < projectsList.length ? (
                <FullButton title={"Show More"} action={handleShowMore} />
              ) : (
                <StyledButton
                  className="pointer radius8"
                  to={"portfolio"}
                  offset={-80}
                  onClick={handleShowLess}
                >
                  Show Less
                </StyledButton>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: ${SPACING.s20} auto 0;
  padding: 0 ${SPACING.s15};
  width: 100%;
  background-color: ${COLOR.fatLight};
  ${MEDIA_QUERY.above.desktop} {
    flex-direction: row;
    justify-content: center;
    justify-content: space-between;
    max-width: ${SIZE.maxWidth};
  }
`;

const Container = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;
