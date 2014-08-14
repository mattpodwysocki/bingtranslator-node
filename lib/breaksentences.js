// Copyright (c) Matthew Podwysocki. All rights reserved. See License.txt in the project root for license information.

var http = require('http');
var getAdmToken = require('./getAdmToken');

function breakSentences(credentials, text, language, cb) {
  var detectOptions = {
    hostname: 'api.microsofttranslator.com',
    port: 80,
    path: '/v2/Ajax.svc/BreakSentences?text=' + encodeURIComponent(text) 
      + '&language=' + encodeURIComponent(language),
    method: 'GET'
  };

  getAdmToken(credentials, function (err, result) {
    if (err) { 
      cb(err);
      return;
    }

    var req = http.request(detectOptions, function (res) {

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

module.exports = breakSentences;