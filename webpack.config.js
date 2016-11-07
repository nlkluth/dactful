require('babel-core/register');

const env = process.env.NODE_ENV || 'development';
const webpack = require(`./build/${env}`).default;

module.exports = webpack;
