import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/oxygen";
import "@fontsource-variable/asap";

// you can extend the theme and add custom colors, font styles, etc.
const colors = {
  brand: {
    50: "#1a365d",
    100: "#153e75",
    500: "#2464ec",
  },
};

const fontWeights = {
  normal: 400,
  medium: 600,
  bold: 800,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

const fonts = {
  heading: `'Oxygen', sans-serif`,
  body: `'Asap', sans-serif`,
};

export const theme = extendTheme({ fonts, colors, fontWeights, breakpoints });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
