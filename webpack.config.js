var webpack = require('webpack');

module.exports = {
  entry: {
    client: "./example/client.js",
  },
  output: {
    filename: '[name].js',
    path: __dirname  + '/public',
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
					}
				}
			}
		]
	},
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [__dirname, 'node_modules']
  },
};
