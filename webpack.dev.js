const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(sa|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
