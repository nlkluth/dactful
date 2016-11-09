/* eslint-disable import/no-extraneous-dependencies */

require('babel-core/register');
const express = require('express');
const webpack = require('webpack');
const config = require('../build/development_hot').default;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3344, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3344');
});

/* eslint-enable import/no-extraneous-dependencies */
