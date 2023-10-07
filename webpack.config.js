const path = require('path');
const buildWebpackConfig = require('./config/build/buildWebpackConfig');

module.exports = (env) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'pages', 'index.js'),
    dist: path.resolve(__dirname, 'dist'),
    template: path.resolve(__dirname, 'src', 'index.html'),
  };

  const mode = env?.mode || 'development';
  const port = env?.port || 3000;

  const config = buildWebpackConfig({
    mode,
    paths,
    port,
  });
  
  return config;
};