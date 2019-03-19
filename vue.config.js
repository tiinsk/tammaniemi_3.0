module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/_colors.scss";
          @import "@/assets/_variables.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear();

    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
        .use('svg-inline-loader')
          .loader('svg-inline-loader')
          .end()
        .end()
      .oneOf('file')
        .use('file')
          .loader('file-loader')
  }
};
