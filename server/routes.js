import React from 'react';
import path from 'path';
import glob from 'glob';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../client/routes/RootRoute';
// import config from './server/config/config';
const internals = {};

const findFiles = (name, files) => files.find((item) => path.extname(item) === '.js' && item.includes(name));

const showScript = (files) => {
  if (__DEV__) {
    return '<script src="http://localhost:3344/dist/public/bundle.js"></script>';
  }

  const app = findFiles('app', files);
  const vendor = findFiles('vendor', files);

  const appPath = app.split('/');
  const vendorPath = vendor.split('/');

  return (`
    <script src="/dist/public/${vendorPath[vendorPath.length - 1]}"></script>
    <script src="/dist/public/${appPath[appPath.length - 1]}"></script>
  `);
};

const renderFullPage = (html, callback) => {
  glob(path.join(__dirname, '../public/*'), (err, files) => {
    return callback(`<!doctype html>
      <html>
        <head>
          <title>dactful</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <meta charset="utf-8">
          <link rel="manifest" href="/dist/public/manifest.json">
        </head>
        <body style="margin:0;background:#effdfc">
          <div id="root">${html}</div>
          ${showScript(files)}
        </body>
      </html>`
    );
  });
};

internals.renderReactApp = (request, reply) => {
  match({ routes, location: request.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      return reply(error.message).code(500);
    }

    if (redirectLocation) {
      return reply.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (renderProps) {
      const html = renderToString(
        <RouterContext {...renderProps} />
      );

      renderFullPage(html, (string) => {
        return reply(string).code(200);
      });
    } else {
      reply('Not found').code(404);
    }
  });
};

export default (server) => {
  server.route([{
    method: 'GET',
    path: '/{param*}',
    config: {
      handler: internals.renderReactApp
    }
  }, {
    method: 'GET',
    path: '/dist/public/{filename*}',
    handler: {
      file: (request) => {
        return path.join(__dirname, '../public', request.params.filename);
      }
    }
  }, {
    method: 'GET',
    path: '/service-worker.js',
    handler: {
      file: () => {
        return path.join(__dirname, '../public/service-worker.js');
      }
    }
  }]);
};
