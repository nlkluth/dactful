import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CommonChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import webpackConfig from './_base';

webpackConfig.module.loaders = webpackConfig.module.loaders.map((loader) => {
  if (/css/.test(loader.test)) {
    const [first, ...rest] = loader.loaders;

    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'));
    delete loader.loaders;
  }

  return loader;
});

webpackConfig.output.filename = '[name].[hash].js';
webpackConfig.entry.vendor = [
  'react',
  'react-dom',
  'react-router'
];
webpackConfig.plugins.push(
  new ExtractTextPlugin('[name].[hash].css'),
  // new HtmlWebpackPlugin({
  //   template: './public/index.html',
  //   hash: false,
  //   filename: 'index.html',
  //   inject: 'body',
  //   minify: {
  //     collapseWhitespace: true
  //   }
  // }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    },

    __CLIENT__: true,
    __SERVER__: false,
    __DEV__: false,
    __DEVTOOLS__: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new CommonChunkPlugin({
    name: 'vendor'
  })
);

export default webpackConfig;
