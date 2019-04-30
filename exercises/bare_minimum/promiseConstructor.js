/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise((resolve, reject) => {
    //do something -> retrieve the first line
      //if success => resolve() >> return the first line 
      //if fail => reject() >> throw an error 
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // create server and listen 
  // when a GET request was sent to the server 
    // if success -> retrieve the status code 
    // if fail -> throw an error 
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
