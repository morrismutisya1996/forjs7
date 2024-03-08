const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack:{
    resolve:{
      extensions:['.js','.vue'],
      alias:{
        '@': resolve('./src'),
        '@components': resolve('./src/components'),
        '@static': resolve('static'),
        '@public': resolve('public')
      }
    },
  }
})
