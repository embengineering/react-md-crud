// This adds fetch and es6-promise as a global
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Dataservice {

	setUrl (restUrl) {
    this.restUrl = restUrl;
  }

  send (method, url, data, handleError) {
	  const requestSettings = { method: method };
	  if (method !== 'GET') {
	    requestSettings.body = JSON.stringify(data);
	    requestSettings.headers = {
	      Accept: 'application/json'
	      ,'Content-Type': 'application/json'
	    };
	  }
	  return fetch(this.restUrl + url, requestSettings)
	    .catch((error) => {
	      if(handleError) {
	        handleError(error);
	      }
	    });
	}

	get (url, handleError) {
	  return this.send('GET', url, {}, handleError);
	}

	post (url, data, handleError) {
	  return this.send('POST', url, data, handleError);
	}

	put (url, data, handleError) {
	  return this.send('PUT', url, data, handleError);
	}

	delete(url, data, handleError) {
		return this.send('DELETE', url, data, handleError);
	}
}

export default new Dataservice();
