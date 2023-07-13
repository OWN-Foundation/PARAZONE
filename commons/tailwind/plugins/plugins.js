const themeScreens = require('../theme/screens')

// const mobileBreakpoints = ['321px', '351px', '376px', '416px', '481px', '501px', '551px', '601px', '641px'];
const mobileBreakpoints = [
  '768px',
  '640px',
  '600px',
  '540px',
  '505px',
  '480px',
  '415px',
  '375px',
  '360px',
  '320px',
]

/* Initial desktop container width divided by initial html font size 1380/10 */
const desktopRatio = 138
/* Initial mobile width divided by initial html font size 768/10 */
const mobileRatio = 76.8

const getFontSizeVal = (containerWidth, ratio) =>
  `${+containerWidth.slice(0, -2) / ratio}px`

const getDesktopScreenOptions = (screenWidth, containerWidth) => ({
  screenWidth,
  containerWidth,
  fontSize: getFontSizeVal(containerWidth, desktopRatio),
})

const getMobileScreenOptions = (screenWidth) => ({
  screenWidth,
  fontSize: getFontSizeVal(screenWidth, mobileRatio),
})

const desktopScreens = [
  getDesktopScreenOptions(themeScreens.md, '769px'),
  getDesktopScreenOptions(themeScreens.lg, '992px'),
  getDesktopScreenOptions(themeScreens.xl, '1120px'),
  getDesktopScreenOptions(themeScreens.xxl, '1280px'),
  getDesktopScreenOptions(themeScreens.laptop, '1380px'),
]

const mobileScreens = mobileBreakpoints.map(getMobileScreenOptions)

const container = {
  '.container': {
    margin: '0 auto',
    '@media (max-width: 768px)': {
      padding: '0 5rem',
    },
  },
}

const desktopMediaQueries = desktopScreens.map((x) => ({
  [`@media (min-width: ${x.screenWidth})`]: {
    '.container': {
      maxWidth: x.containerWidth,
    },
    html: {
      fontSize: x.fontSize,
    },
  },
}))

const mobileMediaQueries = mobileScreens.map((x) => ({
  [`@media (max-width: ${x.screenWidth})`]: {
    html: {
      fontSize: x.fontSize,
    },
  },
}))

module.exports = [container, ...desktopMediaQueries, ...mobileMediaQueries]
