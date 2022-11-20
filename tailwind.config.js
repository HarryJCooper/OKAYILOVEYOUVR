/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      spacing: {
        "custom-title":"9.15rem"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
