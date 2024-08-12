import { Link } from "react-scroll";
import styled from "styled-components";
import { COLOR } from "../../constants/styles/color";
import { SPACING } from "../../constants/styles/spacing";
import { TYPOGRAPHY } from "../../constants/styles/typography";
import { MEDIA_QUERY } from "../../constants/styles/media-query";

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
  color: ${COLOR.lighteningYellow};
  padding: ${SPACING.s2} ${SPACING.s4};
  background-color: ${COLOR.boltBlack};
  cursor: pointer;
  strong {
    ${TYPOGRAPHY.logo}
  }

  ${MEDIA_QUERY.above.desktop} {
    color: ${COLOR.boltBlack};
    background-color: ${COLOR.lighteningYellow};
  }
`;
