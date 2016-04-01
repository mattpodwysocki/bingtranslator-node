// Copyright (c) Matthew Podwysocki. All rights reserved. See License.txt in the project root for license information.

var http = require('http');
var getAdmToken = require('./getadmtoken');

function getLanguageNames(credentials, locale, languageCodes, cb) {

  var textArray = '[' + languageCodes.map(function (text) { return '\"' + text + '\"' }).join(', ') + ']';

  var options = {
    hostname: 'api.microsofttranslator.com',
    port: 80,
    path: '/v2/Ajax.svc/GetLanguageNames?languageCodes=' + encodeURIComponent(textArray)
      + '&locale=' + encodeURIComponent(locale),
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
        var result = data.substring(2, data.length - 1).split(',');
        var cleanResults = result.map(function (r) {
          return r.substring(1, r.length - 1);
        });

        cb(null, cleanResults);
      });
    });

    req.setHeader('Authorization', 'Bearer ' + result.access_token);
    req.end();
  });
}

module.exports = getLanguageNames;