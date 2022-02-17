const Path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.base");

const clientConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: Path.resolve(__dirname, "public"),
  },
}
module.exports = merge(config, clientConfig)
