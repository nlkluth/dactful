import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import Root from '../client/components/application/Root';
// import config from './server/config/config';
const internals = {};

internals.renderReactApp = (request, reply) => {
  const html = renderToString(
    <Root />
  );

  const renderString = `<!doctype html>
    <html>
      <head>
        <title>LikeMinds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta charset="utf-8">
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="http://localhost:3344/dist/public/bundle.js"></script>
      </body>
    </html>`;

  return reply(renderString);
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
    path: '/dist/public/{filename}',
    handler: {
      file: (request) => {
        return path.join(__dirname, '../public', request.params.filename);
      }
    }
  }, {
    method: 'GET',
    path: '/sw.js',
    handler: {
      file: (request) => {
        return path.join(__dirname, '../public/sw.js');
      }
    }
  }]);
};
