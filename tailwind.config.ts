import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ["var(--font-montserrat)"],
        'roboto': ["var(--font-roboto)"],
      },
      fontSize: {
        'heading-1' :'48px',
        'heading-2' :'32px',
        'heading-3' :'24px',
        'heading-4' :'18px',
        'heading-5' :'14px',
        'heading-6' :'12px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-section": "url(/images/bg-card.png)",
      },
      colors:{
        primary:{
          blue:"#1053B7",
          white:"#FFFFFF",
          black:"#050D18",
        },
        secondary:{
          yellow:"#EBA41F",
          red:"#EB1F2B"
        },
        textColor:{
          primary:"#050D18",
          secondary:"#50555D"
        },
        white:"#FFFFFF",
        black:"#000000",
        gray:{
          10:"#E6E6E7",
          30:"#B4B6B9",
          50:"#82868B",
          70:"#50555D",
          100:"#050D18"
        },
        blue:{
          10:"#E7EDF7",
          30:"#B7CBE9",
          50:"#87A9DB",
          70:"#5786CC",
          100:"#1053B7"
        },
        red:{
          10:"#FDE8E9",
          30:"#F9BBBF",
          50:"#F58F95",
          70:"#F1626A",
          100:"#EB1F2B"
        },
        yellow:{
          10:"#FDF5E8",
          30:"#F9E3BB",
          50:"#F5D18F",
          70:"#F1BF62",
          100:"#EBA41F"
        }
      }
    },
  },
  plugins: [],
};

export default config;
