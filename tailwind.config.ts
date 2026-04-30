import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef8f2",
          100: "#d8efdf",
          200: "#b4dfc3",
          600: "#298f4f",
          700: "#227f46",
          800: "#1c663a",
          900: "#164d2e",
          DEFAULT: "#298f4f",
          dark: "#227f46",
          light: "#3fa866",
        },
        accent: {
          50: "#fff4ed",
          100: "#ffe4d2",
          200: "#ffc49e",
          600: "#db7f4c",
          700: "#bd6435",
          900: "#7c3f22",
          DEFAULT: "#f39159",
          dark: "#db7f4c",
          light: "#f7a97a",
        },
        background: {
          DEFAULT: "#fbfaf7",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-slide-up": "fade-slide-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
