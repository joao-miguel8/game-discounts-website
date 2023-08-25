/** @type {import('tailwindcss').Config} */

const fontSizes = {}
const minFontSize = 12
const maxFontSize = 70
const base = 16
let i = minFontSize
while (i <= maxFontSize) {
  fontSizes[i] = `${i / base}rem`
  i += 2
}

module.exports = {
  content: ["./*/**/*.{html,tsx}"],
  theme: {
    fontSize: fontSizes,
    extend: {},
  },
  plugins: [],
}
