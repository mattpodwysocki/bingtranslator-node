`translator.getLanguagesForSpeak(credentials, callback)`
[&#x24C8;](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/getlanguagesforspeak.js "View in source")

Use the detect method to identify the language of a selected piece of text.

#### Arguments
1. `credentials` *(`Object`)*: An object with the following properties
  - `clientId` *(`String`)*: The Client ID from the registered app.
  - `clientSecret` *(`String`)*: The Client Secret from the registered app.
2. `callback` *(`Function`)*: A function with the following parameters.
  - `err` *(`Error`)*: An error if one occurred, else null.
  - `languages` *(`String`)*: A string array containing the friendly language names of the passed languageCodes.

#### Example 

Retrieves the languages available for speech synthesis.

```js
var translator = require('bingtranslator');

var credentials = {
  clientId: '',
  clientSecret: ''
};

translator.getLanguagesForSpeak(credentials, function(err, languages) {
  if (err) {
    console.log('error', err);
    return;
  }

  console.log(languages.length);
});

// => 44
```

### Location

File:
- [`/lib/getlanguagesforspeak.js`](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/getlanguagesforspeak.js)

NPM Package:
- [`bingtranslator`](https://preview.npmjs.com/package/bingtranslator)