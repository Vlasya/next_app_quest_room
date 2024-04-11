import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        main_bg_image: "url('/bg.jpg')",
      },
      boxShadow: {
        '3xl': '0px -4px 8px -4px rgba(255, 255, 255, 0.25)',
      },
      colors: {
        activeOrange: '#F2890F',
        activeYellow: '#FEC432',
        baseTextColor: '#F0F0F0',
        lightText: '#E6E6E6',
        blackText: '#1F1E25',
        lightGreen: '#C1C2CA',
        iconGrey: '#535353',
        iconRed: '#FF3535',
        iconViolet: '#8A43FF',
        iconBlue: '#3A94E7',
        borderColor: '#D9D9D9',
        btnText:'#270B00',
        activeBtnText:'#514321'
      },
      backgroundColor: {
        orangeBg: '#F2890F',
        greyBg: '#C6C4C2',
        lightGrey: '#615E5C',
        activeYellow: '#FEC432',
        baseDark:'#535353'
      },
    },
  },
  plugins: [],
};
export default config;
