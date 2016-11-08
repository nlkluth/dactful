require('babel-core/register')({
  presets: ['es2015', 'react', 'stage-0']
});

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging';

const Hapi = require('hapi');
const config = require('./server/config/config');

const port = process.env.PORT || 9000;
const server = new Hapi.Server();
require('./server/config/hapi').default(server, config);
require('./server/routes').default(server);

server.start(() => {
  console.log(`STARTING ON PORT: ${port}`);
});
