/* eslint-disable @typescript-eslint/no-var-requires */

const chalk = require("chalk");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpack = require("webpack");

const mode = process.env.NODE_ENV || "production";

console.log("");
console.log(`MODE - ${chalk.blue(mode)}`);
console.log("");

const config = {
  entry: "./src/client/index.tsx",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 5000,
    proxy: {
      "/admin": {
        target: "http://localhost:3000/",
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            return "/index.html";
          }
        },
      },
      "/assets": "http://localhost:3000/",
      "/portfolio": {
        target: "http://localhost:3000/",
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            return "/index.html";
          }
        },
      },
      "/portfolioItem": "http://localhost:3000/",
      "/portfolioItems": "http://localhost:3000/",
      "/robots.txt": "http://localhost:3000/",
      "/uploads": "http://localhost:3000/",
      "/user": "http://localhost:3000/",
      "/webfonts": "http://localhost:3000/",
    },
    stats: "minimal",
  },
  mode: mode === "analyze" ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "client-tsconfig.json",
              logLevel: "info",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/client/index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(mode),
      "process.env.TINYMCE_API_KEY": JSON.stringify(
        process.env.TINYMCE_API_KEY
      ),
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};

if (process.env.NODE_ENV === "analyze") {
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "static" }));
}

if (process.env.NODE_ENV === "development") {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
