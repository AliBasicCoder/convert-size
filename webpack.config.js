const path = require("path");

module.exports = {
  entry: "./src/index",
  output: {
    filename: "convertSize.min.js",
    path: path.join(__dirname, "dist"),
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