'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

// This adds fetch and es6-promise as a global
require('es6-promise').polyfill();
require('isomorphic-fetch');

var rootUrl = window.location.hostname === 'localhost' ? 'http://localhost:' + _config2['default'].port : '';

var Dataservice = function Dataservice() {
  if (!(this instanceof Dataservice)) {
    return new Dataservice();
  }
};

Dataservice.prototype.send = function (method, url, data, handleError) {
  var requestSettings = { method: method };
  if (method !== 'GET') {
    requestSettings.body = JSON.stringify(data);
    requestSettings.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
  }
  return fetch(rootUrl + url, requestSettings)['catch'](function (error) {
    if (handleError) {
      handleError(error);
    }
  });
};

Dataservice.prototype.get = function (url, handleError) {
  return this.send('GET', url, {}, handleError);
};

Dataservice.prototype.post = function (url, data, handleError) {
  return this.send('POST', url, data, handleError);
};

Dataservice.prototype.put = function (url, data, handleError) {
  return this.send('PUT', url, data, handleError);
};

Dataservice.prototype['delete'] = function (url, data, handleError) {
  return this.send('DELETE', url, data, handleError);
};

module.exports = new Dataservice();