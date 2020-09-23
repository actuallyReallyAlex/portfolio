/* eslint-disable @typescript-eslint/no-var-requires */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  entry: "./src/client/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // optimization: {
  //   moduleIds: "hashed",
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     chunks: "all",
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all",
  //       },
  //     },
  //   },
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    // publicPath: "dist/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/client/index.html"),
    }),
  ],
  // resolve: {
  //   extensions: [".tsx"],
  // },
};

module.exports = config;
