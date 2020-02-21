const path = require("path");

const dtsBundle = require("dts-bundle-webpack");

module.exports = {
  entry: "./src/index",
  output: {
    filename: "convertSize.min.js",
    path: __dirname,
    library: "convertSize",
    libraryTarget: "commonjs"
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
  plugins: [
    new dtsBundle({
      name: "convert-size",
      main: "out/index.d.ts",
      out: path.join(__dirname, "convertSize.d.ts")
    })
  ]
}