const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function buildLoaders() {
  const babelLoader = {
    test: /\.js$/,
    use: 'babel-loader',
    exclude: '/node_modules/'
  };

  const assetModules = {
    test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
    type: 'asset/resource'
  };

  const miniCssExtractPluginLoader = {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader, 
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
      'postcss-loader'
    ]
  };

  return [
    babelLoader,
    assetModules,
    miniCssExtractPluginLoader,
  ];
};