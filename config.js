/*eslint no-process-env:0*/
var config = {
  port: process.env.port || 3002
  ,env: process.env.NODE_ENV || 'development'
};

module.exports = config;