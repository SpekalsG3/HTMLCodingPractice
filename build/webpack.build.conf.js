const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const buildWebpackConfig = merge.smart(baseWebpackConfig, {
  mode: "production",
  output: {
    publicPath: "/HTMLPractice/dist/"
  },
  module: {
    rules: [{
      test: /\.(jp(e*)g|png|svg)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]",
          publicPath: "/HTMLPractice/dist/"
        }
      }]
    }]
  }
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});