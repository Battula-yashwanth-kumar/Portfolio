import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
        sm:'640px',
        md:'760px',
        lg:'1024px',
        xl:'1220px'
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      backgroundColor:{
        navbar:'#793FDF',
        iconcolor:'#97FFF4',
      },
      textColor:{
        primary:'#793FDF',
      }
    },
  },
  plugins: [],
};
export default config;
