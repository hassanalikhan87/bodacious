import { css } from "styled-components";
import { FONT, FONT_WEIGHT } from "./font";
import { MEDIA_QUERY } from "./media-query";

export const TYPOGRAPHY = {
  logo: css`
    font-family: ${FONT.stack};
    font-size: 48px;
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 48px;
    letter-spacing: 1px;
    margin: 0;
  `,
  navLink: css`
    font-family: ${FONT.stack};
    font-size: 16px;
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 20px;
    letter-spacing: 0em;
    margin: 0;
  `,
  h1: css`
    font-family: ${FONT.stack};
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0em;
    margin: 0;
    font-weight: ${FONT_WEIGHT.bold};
    ${MEDIA_QUERY.above.desktop} {
      font-size: 60px;
      line-height: 60px;
    }
  `,
  h2: css`
    font-family: ${FONT.stack};
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 1px;
    margin: 0;
  `,
  p: css`
    font-family: ${FONT.stack};
    font-weight: ${FONT_WEIGHT.regular};
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0em;
    margin: 0;
    ${MEDIA_QUERY.above.desktop} {
      font-weight: ${FONT_WEIGHT.light};
    }
  `,
  ctaText: css`
    font-family: ${FONT.stack};
    font-weight: ${FONT_WEIGHT.bold};
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0em;
    margin: 0;
  `,
};
