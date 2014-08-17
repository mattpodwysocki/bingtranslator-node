// Copyright (c) Matthew Podwysocki. All rights reserved. See License.txt in the project root for license information.

var http = require('http');
var getAdmToken = require('./getAdmToken');

function speak(credentials, text, language, format, options, cb) {
  var path = '/v2/Ajax.svc/Speak?text=' + encodeURIComponent(text)
    + '&language=' + encodeURIComponent(language);

  if (format) {
    path += '&format=' + encodeURIComponent(format);
  }
  if (options) {
    path += '&options=' + options;
  }

  var urlOptions = {
    hostname: 'api.microsofttranslator.com',
    port: 80,
    path: path,
    method: 'GET'
  };

  getAdmToken(credentials, function (err, result) {
    if (err) { 
      cb(err);
      return;
    }

    var req = http.request(urlOptions, function (res) {

      res.setEncoding('utf8');

      var data = '';
      res.on('data', function (d) {
        data += d;
      });

      res.on('error', function (err) {
        cb(err);
      });

      res.on('end', function () {
        // Strip out JSONP header and quotes
        cb(null, JSON.parse(data.substring(1)));
      });
    });

    req.setHeader('Authorization', 'Bearer ' + result.access_token);
    req.end();
  });
}

module.exports = speak;