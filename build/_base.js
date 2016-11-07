const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
  entry: {
    app: [
      path.join(__dirname, '../client/components/application/Main.js')
    ]
  },
  output: {
    path: path.join(__dirname, '../dist/public'),
    filename: 'bundle.js',
    publicPath: '/dist/public/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, '../client'),
      query: {
        cacheDirectory: true,
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react']
      }
    }, {
      test: /\.scss$/,
      include: path.join(__dirname, '../client'),
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.json$/,
      loaders: ['json-loader']
    },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }]
  }
};

module.exports = webpackConfig;
