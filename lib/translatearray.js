// Copyright (c) Matthew Podwysocki. All rights reserved. See License.txt in the project root for license information.

var http = require('http');
var getAdmToken = require('./getadmtoken');

function translateArray(credentials, texts, from, to, cb) {
  
  var textArray = '[' + texts.map(function (text) { return '\"' + text + '\"' }).join(', ') + ']';  

  var detectOptions = {
    hostname: 'api.microsofttranslator.com',
    port: 80,
    path: '/v2/Ajax.svc/TranslateArray?texts=' 
      + encodeURIComponent(textArray) + '&from='
      + encodeURIComponent(from) + '&to='
      + encodeURIComponent(to),
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
        var r = JSON.parse(data.substring(1));

        cb(r.Error, r);
      });
    });

    req.setHeader('Authorization', 'Bearer ' + result.access_token);
    req.end();
  });
}

module.exports = translateArray;