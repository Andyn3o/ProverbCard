export const sizeNumber = {
  mobileMax: 767,
  tabletMin: 768,
  tabletMax: 1200,
  desktopMin: 1200,
};

export const size = {
  mobileMax: `${sizeNumber.mobileMax}px`,
  tabletMin: `${sizeNumber.tabletMin}px`,
  tabletMax: `${sizeNumber.tabletMax}px`,
  desktopMin: `${sizeNumber.desktopMin}px`,
  desktopMax: `${sizeNumber.desktopMax}px`,
};

export const device = {
  mobile: `(max-width: ${size.mobileMax})`,
  tablet: `(min-width: ${size.tabletMin}) and (max-width: ${size.tabletMax})`,
  desktop: `(min-width: ${size.desktopMin})`,
};
