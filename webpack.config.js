const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const dist = path.join(__dirname, "dist");

module.exports = {
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: dist,
    },
    compress: true,
    port: 3000,
  },
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: dist,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/assets", to: dist }],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
