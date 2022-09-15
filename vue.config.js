/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}) */


var link = "https://chattelapi.kodeafrika.com"
module.exports = {
  devServer: {
    port: 4000,
    proxy: {
      "^/api": {
        target: link,
        pathRewrite: { "^/api/": "/api/" },
        changeOrigin: true,
        ws: true,
        logLevel: "debug",
        secure: false,
      },
    },


  }
}