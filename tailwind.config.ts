import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {"0": "#000000"},
        gray: {"50": "#ffffff"},
        neutral: {"400": "#9D9D9D"},
        amber: {"400": "#E6AE2B"},
        yellow: {"400": "#FFC130"},
      },
    },
    fontSize: {
      xs: ["14px", {lineHeight: "1.57em"}],
      sm: ["15px", {lineHeight: "1.6em", letterSpacing: "0.067em"}],
      md: ["16px", {lineHeight: "1.62em"}],
      base: ["18px", {lineHeight: "1.67em"}],
      lg: ["20px", {lineHeight: "1.4em"}],
      xl: ["24px", {lineHeight: "1.58em", letterSpacing: "0.067em"}],
      "2xl": ["26px", {lineHeight: "1.01em"}],
      "3xl": ["32px", {lineHeight: "7.12em", letterSpacing: "0.44em"}],
      "4xl": ["35px", {lineHeight: "0.99em"}],
      "5xl": ["41px", {lineHeight: "0.99em"}],
      "6xl": ["42px", {lineHeight: "1.02em"}],
      "7xl": ["50px", {lineHeight: "1em"}],
      "8xl": ["86px", {lineHeight: "1em"}],
      "9xl": ["185px", {lineHeight: "0.92em"}],
      "10xl": ["220px", {lineHeight: "0.92em"}],
      "54": ["54px", {lineHeight: "-2px"}],
      "28": ["28px", {lineHeight: "-2px"}],
    },
    fontFamily: {
      "noto-sans-jp": ["'Noto Sans JP'", ...fontFamily.sans],
      roboto: ["'Roboto'", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1090px",
      xl: "1920px",
    },
  },
  plugins: [],
};
export default config;
