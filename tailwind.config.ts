import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    animation: {
      "move-up-and-down": "move-up-and-down 2s linear infinite",
      "grow-when-hover": "grow-when-hover 0.2 ease-in-out",
      "breath-light-to-dark": "breath 8s ease-in-out infinite",
      "breath-light-to-dark-2": "breath 8s ease-in-out infinite 4s",
    },
    extend: {
      keyframes: {
        "move-up-and-down": {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "grow-when-hover": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.1)",
          },
        },
        breath: {
          "0%": {
            opacity: "0.3",
          },
          "50%": {
            opacity: "0.75",
          },
          "100%": {
            opacity: "0.3",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
