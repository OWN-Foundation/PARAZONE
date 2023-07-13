/** @type {import('tailwindcss').Config} */
const fontFamily = require('./commons/tailwind/theme/fontFamily');
const colors = require('./commons/tailwind/theme/colors');
const fontSize = require('./commons/tailwind/theme/fontSize');
const screens = require('./commons/tailwind/theme/screens');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,scss|less}",
  ],
  theme: {
    fontFamily: fontFamily,
    colors: colors,
    fontSize: fontSize,
    screens: screens,
  },
  corePlugins: require('./commons/tailwind/plugins/corePlugins'),
  plugins: [
    require('./commons/tailwind/plugins/index'),

  ]
}