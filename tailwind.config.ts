import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      img_bg_hero: "url('../assets/bg-hero.jpg')",
    },

    extend: {
      colors: {
        "primary-blue": "#1063b0",
        "primary-orange": "#ec7000",
        "primary-gray": "#33303e",
        "second-gray": "#4e4b59",
        "gray-phone": "#f4f4f4",
        "text-gray": "#7a7786",
        "opacity-gray": "rgba(100, 80, 57, 0.1)",
      },

      screens: {
        "custom-smm": { min: "0px", max: "768px" },
      },
    },
  },
  plugins: [],
};
export default config;
