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
var file = require('./promiseConstructor');
var gitHub = require('./promisification');

var writeFileAsync = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return file.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(line) {
      return gitHub.getGitHubProfileAsync(line);
    })
    .then(function(body) {
      return writeFileAsync(writeFilePath, JSON.stringify(body));
    })
    .catch(function(error) {
      console.log(error.message);
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
