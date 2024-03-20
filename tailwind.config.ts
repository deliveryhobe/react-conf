import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {

      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
      },
      fontSize: {
        hero: '140px',
      },
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        blue: "hsl(var(--blue))",
        gray: "hsl(var(--gray))",
        light: "hsl(var(--light))",
        "gray-light": "hsl(var(--gray-light))"

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
