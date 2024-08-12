import { Button } from "react-scroll";
import styled from "styled-components";
import { TYPOGRAPHY } from "../../constants/styles/typography";
import { SPACING } from "../../constants/styles/spacing";

const CallToAction = ({
  title,
  destination,
  offset,
  border,
  backgroundcolor,
  color,
  margin,
}) => {
  return (
    <StyledButton
      to={destination}
      offset={offset}
      border={border}
      backgroundcolor={backgroundcolor}
      color={color}
      margin={margin}
    >
      {title}
    </StyledButton>
  );
};

export default CallToAction;

const StyledButton = styled(Button)`
  ${TYPOGRAPHY.ctaText}
  border: ${(props) => props.border};
  border-radius: 10px;
  background-color: ${(props) => props.backgroundcolor};
  margin: ${(props) => props.margin};
  padding: ${SPACING.s4} ${SPACING.s8};
  outline: none;
  color: ${(props) => props.color};
  :hover {
    color: ${(props) => props.backgroundcolor};
    background-color: ${(props) => props.color};
  }
`;
