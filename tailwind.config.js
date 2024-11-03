import plugin from "tailwindcss/plugin";
import { black, transparent, white } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "border-primary-paper",
    "border-primary-rock",
    "border-primary-scissors",
    "border-primary-cyan",
    "border-primary-lizard",
    "border-primary-paper-hover",
    "border-primary-rock-hover",
    "border-primary-scissors-hover",
    "border-primary-cyan-hover",
    "border-primary-lizard-hover",
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        "-1/2": "-50%",
      },
    },
    fontFamily: {
      custom: ["Barlow Semi Condensed", "sans-serif"],
    },
    colors: {
      black,
      transparent,
      white,
      primary: {
        scissors: {
          DEFAULT: "hsl(39, 89%, 49%)",
          hover: "hsl(40, 84%, 53%)",
        },
        paper: {
          DEFAULT: "hsl(230, 89%, 62%)",
          hover: "hsl(230, 89%, 65%)",
        },
        rock: {
          DEFAULT: "hsl(349, 71%, 52%)",
          hover: "hsl(349, 70%, 56%)",
        },
        lizard: {
          DEFAULT: "hsl(261, 73%, 60%)",
          hover: "hsl(261, 72%, 63%)",
        },
        cyan: {
          DEFAULT: "hsl(189, 59%, 53%)",
          hover: "hsl(189, 58%, 57%)",
        },
      },
      neutral: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      background: {
        from: "hsl(214, 47%, 23%)",
        to: "hsl(237, 49%, 15%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      addUtilities({
        ".bg-gradient-to-c": {
          backgroundImage: `radial-gradient(circle at top, ${theme(
            "colors.background.from"
          )}, ${theme("colors.background.to")})`,
        },
        ".bg-gradient-win-to-lose": {
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1%, transparent 60%)",
        },
      });
    }),
  ],
};
