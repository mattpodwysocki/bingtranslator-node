`translator.getLanguagesForTranslate(credentials, callback)`
[&#x24C8;](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/getlanguagesfortranslate.js "View in source")

Obtain a list of language codes representing languages that are supported by the Translation Service. `translate` and `translateArray` can translate between any of these languages.

#### Arguments
1. `credentials` *(`Object`)*: An object with the following properties
  - `clientId` *(`String`)*: The Client ID from the registered app.
  - `clientSecret` *(`String`)*: The Client Secret from the registered app.
2. `callback` *(`Function`)*: A function with the following parameters.
  - `err` *(`Error`)*: An error if one occurred, else null.
  - `languages` *(`String`)*: A string array containing the friendly language names of the passed languageCodes.

#### Example 

The following example gets the number of languages available for translation.

```js
var translator = require('bingtranslator');

var credentials = {
  clientId: '',
  clientSecret: ''
};

translator.getLanguagesForTranslate(credentials, function(err, languages) {
  if (err) {
    console.log('error', err);
    return;
  }

  console.log(languages.length);
});

// => 45
```

### Location

File:
- [`/lib/getlanguagesfortranslate.js`](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/getlanguagesfortranslate.js)

NPM Package:
- [`bingtranslator`](https://preview.npmjs.com/package/bingtranslator)