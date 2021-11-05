const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  entry: "/src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.resolve(__dirname, "../src"),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "/src/index.html" }),
    new webpack.EnvironmentPlugin(["GOOGLE_CLIENT_ID"]),
  ],
};
