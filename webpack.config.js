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
            presets: ["es2015", "stage-0"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [__dirname, 'node_modules']
  },
};
