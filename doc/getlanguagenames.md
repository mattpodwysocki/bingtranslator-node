`translator.getLanguageNames(credentials, locale, languageCodes, callback)`
[&#x24C8;](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/getlanguagenames.js "View in source")

Use the detect method to identify the language of a selected piece of text.

#### Arguments
1. `credentials` *(`Object`)*: An object with the following properties
  - `clientId` *(`String`)*: The Client ID from the registered app.
  - `clientSecret` *(`String`)*: The Client Secret from the registered app. 
2. `locale` *(`String`)*: A string representing a combination of an ISO 639 two-letter lowercase culture code associated with a language and an ISO 3166 two-letter uppercase subculture code to localize the language names or a ISO 639 lowercase culture code by itself.
3. `languageCodes` *(`Array`)*: A string array representing the ISO 639-1 language codes to retrieve the friendly name for.
4. `callback` *(`Function`)*: A function with the following parameters.
  - `err` *(`Error`)*: An error if one occurred, else null.
  - `languages` *(`String`)*: A string array containing the friendly language names of the passed languageCodes.

#### Example 

The following example uses a detect to get the language of the text

```js
var translator = require('bingtranslator');

var credentials = {
  clientId: '',
  clientSecret: ''
};

var languageCodes = ['de', 'fr', 'it'];

translator.getLanguageNames(credentials, 'pl', languageCodes, function(err, languageNames) {
  if (err) {
    console.log('error', err);
    return;
  }

  console.log(languageNames);
});

// => [ 'Niemiecki', 'Francuski', 'Wloski' ]
```

### Location

File:
- [`/lib/getlanguagenames.js`](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/getlanguagenames.js)

NPM Package:
- [`bingtranslator`](https://preview.npmjs.com/package/bingtranslator)