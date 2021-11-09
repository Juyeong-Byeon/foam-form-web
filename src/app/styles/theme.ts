const pixelToRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};

const colors = {
  bg: "red",
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
    `,
};

const theme = {
  fontSizes,
  colors,
  common,
} as const;

export type Theme = typeof theme;

export default theme;
