const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function buildPlugins(options) {
  const { paths } = options;

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.template,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ];

  return plugins;
};