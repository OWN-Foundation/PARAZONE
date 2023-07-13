const screens = {
  'max-xs': {raw: 'not all and (min-width: 320px)'},
  'max-sm': {raw: 'not all and (min-width: 641px)'},
  'max-md': {raw: 'not all and (min-width: 769px)'},
  'max-lg': {raw: 'not all and (min-width: 1024px)'},
  'max-xl': {raw: 'not all and (min-width: 1280px)'},
  'max-xxl': {raw: 'not all and (min-width: 1380px)'},
  xs: '320px',
  sm: '641px',
  md: '769px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1380px',
  laptop: '1460px',
  desktop: '1560px',
  print: { raw: 'print' },
  landscape: { raw: '(orientation: landscape)' },
}

module.exports = screens
