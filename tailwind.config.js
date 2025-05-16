/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1921px', 
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        grey: 'var(--grey)', 
      },
    },
  },
  plugins: [],
}

