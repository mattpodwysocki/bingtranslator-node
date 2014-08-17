// Copyright (c) Matthew Podwysocki. All rights reserved. See License.txt in the project root for license information.

var http = require('http');
var getAdmToken = require('./getAdmToken');

function getLanguagesForTranslate(credentials, cb) {
  var options = {
    hostname: 'api.microsofttranslator.com',
    port: 80,
    path: '/v2/Ajax.svc/GetLanguagesForTranslate',
    method: 'GET'
  };

  getAdmToken(credentials, function (err, result) {
    if (err) { 
      cb(err);
      return;
    }

    var req = http.request(options, function (res) {

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

module.exports = getLanguagesForTranslate;