require("dotenv/config");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./frontend/index.ts",
  devtool: "source-map",
  mode: "production",
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  output: {
    filename: "public/frontend/index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "frontend/public/[contenthash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 51200000,
    maxAssetSize: 51200000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./frontend/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "frontend/public/", to: "./public" },
        { from: "frontend/favicon.ico", to: "./favicon.ico" },
      ],
    }),
    // new webpack.EnvironmentPlugin(["API_ENDPOINT"]),
    new MiniCssExtractPlugin({ filename: 'css/style.css' })
  ],
};
