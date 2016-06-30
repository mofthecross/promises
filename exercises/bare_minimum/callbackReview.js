/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function(filePath, callback) {
  fs.readFile(filePath, function(error, data) {
    if (error) {
      callback(error);
    } else {
      var arrayOfData = data.toString().split('\n');
      callback(error, arrayOfData[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function(url, callback) {
  var options = {url: url};
  request(options, function(error, response, body) {
    if (error) {
      callback(error);
    } else {
      callback(error, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  pluckFirstLineFromFile: pluckFirstLineFromFile,
  getStatusCode: getStatusCode
};
