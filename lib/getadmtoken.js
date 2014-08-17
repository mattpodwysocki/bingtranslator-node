// Copyright (c) Matthew Podwysocki. All rights reserved. See License.txt in the project root for license information.

var https = require('https');

function getAdmToken(creds, cb) {
  if (!creds) { throw new Error('Credentials are required'); }

  var admOptions = {
    hostname: 'datamarket.accesscontrol.windows.net',
    port: 443,
    path: '/v2/OAuth2-13',
    method: 'POST'
  };

  var req = https.request(admOptions, function (res) {

    res.setEncoding('utf8');

    var data = ''
    res.on('data', function (d){
      data += d;
    });

    res.on('error', function (err) {
      cb(err);
    });

    res.on('end', function () {
      var r = JSON.parse(data);
      if (r.error) {
        cb(new Error(r.error));
      } else { 
        cb(null, r);
      }
    });
  });

  req.setHeader('Content-Type', 'application/x-www-form-urlencoded')
  req.end('grant_type=client_credentials&client_id=' 
    + encodeURIComponent(creds.clientId)  + '&client_secret=' 
    + encodeURIComponent(creds.clientSecret) + '&scope=http://api.microsofttranslator.com');
}

module.exports = getAdmToken;