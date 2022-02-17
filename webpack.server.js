const Path = require("path");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const config = require("./webpack.base");

const serverConfig = {
  target: "node",
  externals: [nodeExternals()],
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: Path.resolve(__dirname, "build"),
  },
  externalsPresets: {
    node: true,
  },
};

module.exports = merge(config, serverConfig);
