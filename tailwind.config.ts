import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
      colors: {
        'KKPL-dark-purple': '#271B5B',
        'KKPL-dark-blue': '#10044A',
        'KKPL-light-blue': '#00B1E5',
        'KKPL-light-red': '#EE2364',
        'KKPL-dark-grey': '#262D4A',
        'KKPL-medium-grey': '#9EA2AE',
        'KKPL-light-grey': '#E0DDDC',
      },
      boxShadow: {
        'KKPL-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
    },
  },
  plugins: [],
};
export default config;
