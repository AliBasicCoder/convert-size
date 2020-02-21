const path = require("path");

module.exports = {
  entry: "./src/index",
  output: {
    filename: "convertSize.min.js",
    path: __dirname,
    library: "convertSize",
    libraryTarget: "umd"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}