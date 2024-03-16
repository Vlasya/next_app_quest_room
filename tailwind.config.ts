import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        activeTab: '#F2890F',
        baseTextColor: '#F0F0F0',
        lightText: '#E6E6E6',
        blackText: '#1F1E25',
        lightGreen: '#C1C2CA',
      },
      backgroundColor: {
        orangeBg: '#F2890F',
        greyBg: '#C6C4C2',
      },
    },
  },
  plugins: [],
};
export default config;
