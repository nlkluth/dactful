const env = process.env.NODE_ENV || 'development';

export default Object.assign({},
  /* eslint-disable global-require, import/no-dynamic-require */
  require('./env/all'),
  require(`./env/${env}`)
  /* eslint-enable global-require, import/no-dynamic-require */
);
