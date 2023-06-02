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
      boxShadow: {
        custom: '0 4px 20px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        'xs': '480px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'first-pc': "url('/bg_first.webp')",
        'first-sp': "url('/bg_first_sp.webp')",
        'second-pc': "url('/bg_second.webp')",
        'second-sp': "url('/bg_second_sp.webp')",
        'about-pc': "url('/about_pc.webp')",
        'about-sp': "url('/about_sp.webp')",
      },
      fontFamily: {
        sans: ['var(--font-notojp)', 'var(--font-noto)', 'var(--font-jost)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        heroTag: ['28px', 1.4285],
      },
      colors: {
        'ar': {
          regular: '#111111',
          navy: '#000F44',
          purple: '#8094FF',
          campaign: '#4756A8',
          gray: '#F6F4F1',
          lightblue: '#B1F1FF',
        }
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
