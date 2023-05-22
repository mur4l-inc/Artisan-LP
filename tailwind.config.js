/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-notojp)', 'var(--font-noto)', 'var(--font-jost)' , ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        heroTag: ['28px', 1.4285],
      },
      colors: {
        'ar': {
          regular: '#111111',
          navy: '#000F44',
          purple: '#6177EF',
          campaign: '#4756A8',
          gray: '#F6F4F1',
        }
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
