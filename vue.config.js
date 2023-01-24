const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
    externals: {
      '@rad/hd-aurora': {
        commonjs: '@rad/hd-aurora',
        amd: '@rad/hd-aurora',
        root: '@rad/hd-aurora',
      }
    }
  }
});
