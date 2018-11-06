const path = require('path');
module.exports = {
  productionSourceMap: false,
  baseUrl: './',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 8001,
  },
  configureWebpack: {
    resolve: {
      alias: {
      },
    },
  },
  chainWebpack: (config) => {
    // 注入全局mixin
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type =>
      config.module.rule('less').oneOf(type)
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [
            path.resolve(__dirname, './src/assets/style/variable.less'),
            path.resolve(__dirname, './src/assets/style/index.less'),
          ],
        }));
  },
};
