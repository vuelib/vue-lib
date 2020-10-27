const svgIconConfig = require('./config/webpack/svg-icon')

module.exports = {
  lintOnSave: false,

  chainWebpack: (config) => {
    svgIconConfig(config)
  },

  css: {
    loaderOptions: {
      sass: { prependData: '@import "@/styles/_index.sass";' },
    },
  },

}
