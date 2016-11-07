import webpackConfig from './_base';
import webpack from 'webpack';

webpackConfig.output.publicPath = 'http://localhost:3344/dist/public/';
webpackConfig.devtool = 'source-maps';
webpackConfig.output.filename = 'bundle.js';
webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
    __DEV__: true,
    __DEVTOOLS__: true
  })
);

export default webpackConfig;
