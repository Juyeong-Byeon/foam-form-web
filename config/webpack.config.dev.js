const { merge } = require("webpack-merge");

const webpackConfigDev = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 9000,
    hot: true,
  },
};

console.log(merge(require("./webpack.config.common"), webpackConfigDev));

module.exports = merge(require("./webpack.config.common"), webpackConfigDev);
