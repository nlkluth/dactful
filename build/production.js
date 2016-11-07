import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
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
webpackConfig.plugins.push(
  new ExtractTextPlugin('[name].[hash].css'),
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
  })
);

export default webpackConfig;
