const path = require("path");

const dtsBundle = require("dts-bundle-webpack");

module.exports = {
  entry: "./src/index",
  output: {
    filename: "convertSize.min.js",
    path: __dirname,
    library: "convertSize",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  }
}