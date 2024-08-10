import { Link } from "react-scroll";
import styled from "styled-components";
import { COLOR } from "../../constants/styles/color";
import { SPACING } from "../../constants/styles/spacing";
import { TYPOGRAPHY } from "../../constants/styles/typography";

const BodaciousLogo = ({ logoText, path }) => {
  return (
    <LogoLink to={path} smooth={true}>
      <strong>{logoText}</strong>
    </LogoLink>
  );
};

export default BodaciousLogo;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${COLOR.fatLight};
  padding: ${SPACING.s2} ${SPACING.s4};
  background-color: ${COLOR.fatRed};
  cursor: pointer;
  strong {
    ${TYPOGRAPHY.logo}
  }
`;
