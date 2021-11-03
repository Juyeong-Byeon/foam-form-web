const { merge } = require("webpack-merge");

const webpackConfigDev = {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css?$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 9000,
    hot: true,
  },
};
module.exports = merge(require("./webpack.config.common"), webpackConfigDev);
