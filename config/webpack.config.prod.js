const { merge } = require("webpack-merge");

const webpackConfigProd = {
  mode: "production",
};
module.exports = merge(require("./webpack.config.common"), webpackConfigProd);
