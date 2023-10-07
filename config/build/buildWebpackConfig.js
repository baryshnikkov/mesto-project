const buildDevServer = require('./buildDevServer');
const buildLoaders = require('./buildLoaders');
const buildPlugins = require('./buildPlugins');

module.exports = function buildWebpackConfig(options) {
	const { mode, paths, isDev } = options;

  return {
		mode,
		entry: paths.entry,
		output: {
    		path: paths.dist,
    		filename: 'main.js',
    	  publicPath: '',
  	},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		devServer: isDev ? buildDevServer(options) : undefined,
	};
};