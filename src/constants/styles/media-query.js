import { BREAKPOINT } from "./breakpoint";

const getMediaQueryByMinMax = ({ min, max }) =>
  min || max
    ? `@media screen ${min ? `and (min-width: ${min}px)` : ""}${
        max ? ` and (max-width: ${max - 1}px)` : ""
      }`
    : "";

// MEDIA_QUERY
export const MEDIA_QUERY = {
  below: {
    smallMobile: getMediaQueryByMinMax({ max: BREAKPOINT.smallMobile }),
    mobile: getMediaQueryByMinMax({ max: BREAKPOINT.mobile }),
    tablet: getMediaQueryByMinMax({ max: BREAKPOINT.tablet }),
    desktop: getMediaQueryByMinMax({ max: BREAKPOINT.desktop }),
    largeDesktop: getMediaQueryByMinMax({ max: BREAKPOINT.largeDesktop }),
  },
  above: {
    smallMobile: getMediaQueryByMinMax({ min: BREAKPOINT.smallMobile }),
    mobile: getMediaQueryByMinMax({ min: BREAKPOINT.mobile }),
    tablet: getMediaQueryByMinMax({ min: BREAKPOINT.tablet }),
    desktop: getMediaQueryByMinMax({ min: BREAKPOINT.desktop }),
    largeDesktop: getMediaQueryByMinMax({ min: BREAKPOINT.largeDesktop }),
  },
  between: {
    smallMobileAndMobile: getMediaQueryByMinMax({
      min: BREAKPOINT.smallMobile,
      max: BREAKPOINT.mobile,
    }),
    smallMobileAndTablet: getMediaQueryByMinMax({
      min: BREAKPOINT.smallMobile,
      max: BREAKPOINT.tablet,
    }),
    smallMobileAndDesktop: getMediaQueryByMinMax({
      min: BREAKPOINT.smallMobile,
      max: BREAKPOINT.desktop,
    }),
    mobileAndTablet: getMediaQueryByMinMax({
      min: BREAKPOINT.mobile,
      max: BREAKPOINT.tablet,
    }),
    mobileAndDesktop: getMediaQueryByMinMax({
      min: BREAKPOINT.mobile,
      max: BREAKPOINT.desktop,
    }),
    tabletAndDesktop: getMediaQueryByMinMax({
      min: BREAKPOINT.tablet,
      max: BREAKPOINT.desktop,
    }),
  },
  hover: {
    on: "@media (any-hover: hover)",
    off: "@media (any-hover: none)",
  },
};
