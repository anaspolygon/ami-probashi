import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#187E7D",
      secondary: "#CFE6DB",
      greyscale: "#334155",
      cadetgrey: "#8D9CB0",
      tertiary: "#7AC19F",
      white: "#FFF",
      orange: "#F6A723",
      tertiarylight: "rgba(207, 230, 219, 0.3)",
    },
    screens: {
      web: "1440px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        white: "#FFF",
      },
      width: {
        40.25: "161px",
        55.75: "223px",
        37.5: "150px",
        292.5: "1170px",
        "97/100": "97%",
      },
      height: {
        13: "52px",
        13.5: "54px",
        110: "440px",
        112: "448px",
        120: "480px",
      },
      borderRadius: {
        40: "40px",
        50: "50px",
        60: "60px",
      },
      lineHeight: {
        29: "29px",
        30: "30px",
        48: "48px",
      },
      padding: {
        5.5: "22px",
        10.5: "42px",
        14.25: "57px",
        18.75: "75px",
        33.75: "135px",
        18: "72px",
      },
      margin: {
        33: "132px",
      },
      fontSize: {
        8.5: "34px",
      },
    },
  },
  plugins: [],
};
export default config;
