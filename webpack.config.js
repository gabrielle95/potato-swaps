const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ template: "./client/index.html" }),
  ],
  entry: "./client/src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "client/assets",
        },
      },
      {
        test: /\.css?$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/"),
  },
};
