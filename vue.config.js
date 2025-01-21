const { defineConfig } = require('@vue/cli-service');
const packageJson = require('./package.json');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = packageJson.title;
      return args;
    });
  }
});
