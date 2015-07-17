import fetch from 'node-fetch';

var config = require('../../config');
var rootUrl = window.location.hostname === 'localhost' ? `http://localhost:${config.port}` : '';

var Dataservice = function (){
  if (!(this instanceof Dataservice)) {
    return new Dataservice();
  }
};

Dataservice.prototype.send = function(method, url, data, handleError) {
  var requestData = '';
  if (method !== 'GET') {
    requestData = JSON.stringify(data);
  }
  return fetch(rootUrl + url, {
    ,type: method
    ,data: requestData
    ,global: handleError
    ,contentType: 'application/json'
  });
};

Dataservice.prototype.get = function(url, handleError) {
  return this.send('GET', url, {}, handleError);
};

Dataservice.prototype.post = function(url, data, handleError) {
  return this.send('POST', url, data, handleError);
};

Dataservice.prototype.put = function(url, data, handleError) {
  return this.send('PUT', url, data, handleError);
};

Dataservice.prototype.delete = function(url, data, handleError) {
  return this.send('DELETE', url, data, handleError);
};

module.exports = new Dataservice();
