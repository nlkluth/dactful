const env = process.env.NODE_ENV || 'development';

export default Object.assign({},
  /* eslint-disable global-require, import/no-dynamic-require */
  require('./env/all').default,
  require(`./env/${env}`).default
  /* eslint-enable global-require, import/no-dynamic-require */
);
