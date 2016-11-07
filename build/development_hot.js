import webpack from 'webpack';
import webpackConfig from './development';

webpackConfig.output.publicPath = 'http://localhost:3344/dist/public/';
webpackConfig.entry.app.unshift(
  'webpack-hot-middleware/client?path=http://localhost:3344/__webpack_hmr',
  'webpack/hot/dev-server'
);

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

webpackConfig.module.loaders = webpackConfig.module.loaders.map((loader) => {
  if (
    /babel/.test(loader.loader) &&
    !~loader.query.presets.indexOf('react-hmre')
  ) {
    loader.query.presets.push('react-hmre');
  }

  return loader;
});

export default webpackConfig;
