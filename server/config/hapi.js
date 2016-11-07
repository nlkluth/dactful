import Inert from 'inert';

const config = (server) => {
  server.connection({
    port: process.env.PORT || 9000,
    host: '0.0.0.0'
  });

  server.register(Inert, () => {});
};

export default config;
