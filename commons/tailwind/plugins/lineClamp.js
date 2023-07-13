const vals = [1, 2, 3, 4, 5, 6, 7, 8]

const lineClamps = vals.map((v) => ({
  [`.line-clamp-${v}`]: {
    display: '-webkit-box',
    '-webkit-line-clamp': `${v}`,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    height: 'max-content',
  },
}))

module.exports = lineClamps
