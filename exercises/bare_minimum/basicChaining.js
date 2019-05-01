/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promisification = require('./promisification')
var promiseConstructor = require('./promiseConstructor')

Promise.promisifyAll(fs);


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath)
  .then(
    function(firstLine){
      console.log(firstLine);
      return promisification.getGitHubProfileAsync(firstLine)
    }
  ).then(
    function(body){
      return JSON.stringify(body);
      // console.log('id comparison')
      // console.log(body.id)
      // var pseudo = JSON.stringify(body)
      // console.log(JSON.parse(pseudo).id);
    }
  ).then(
    function(bodyJSON){
      return fs.writeFileAsync(writeFilePath,bodyJSON)
    }
  )
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};


