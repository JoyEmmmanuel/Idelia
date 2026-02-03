import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '3/4': '3 / 4',
        '4/5': '4 / 5', 
      },
      grayscale: {
    20: '20%',
  },
  transitionDuration: {
    '2000': '2000ms',
  },
  padding: {
        'idelia-x': '1.5rem', // Mobile padding (px-6)
        'idelia-md-left': '6rem', // Desktop left (pl-24)
        'idelia-md-right': '3rem', // Desktop right (pr-12)
      },
      colors: {
        idelia: {
          cream: "#FDFCF7",
          olive: "#556B2F",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;