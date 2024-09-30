export type MediaQuery = typeof mq;

export const breakPoints = {
  xs: 320, //mobile
  sm: 768, //tablet
  md: 1024, //laptop
  lg: 1200, //pc
  xl: 1440, //pc wide
};

export const mq = (bp: keyof typeof breakPoints) =>
  `@media screen and (min-width: ${breakPoints[bp]}px)`;
