const basePlugins = require('./plugins')
const lineClamps = require('./lineClamp')

const plugins = [
  ({ addComponents }) => {
    addComponents([...basePlugins, ...lineClamps])
  },
]

module.exports = plugins
