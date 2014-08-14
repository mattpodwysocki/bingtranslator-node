`translator.detectArray(credentials, texts, callback)`
[&#x24C8;](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/detectarray.js "View in source")

Use the detect method to identify the language of a selected piece of text.

#### Arguments
1. `credentials` *(`Object`)*: An object with the following properties
  - `clientId` *(`String`)*: The Client ID from the registered app.
  - `clientSecret` *(`String`)*: The Client Secret from the registered app. 
2. `texts` *(Array)*: A string array representing the text from an unknown language. The size of the text must not exceed 10000 characters.
3. `callback` *(`Function`)*: A function with the following parameters.
  - `err` *(`Error`)*: An error if one occurred, else null.
  - `languages` *(`String`)*: A string array containing a two-character Language codes for each row of the input array.

#### Example 

The following example uses a detect to get the language of the text

```js
var translator = require('bingtranslator');

var credentials = {
  clientId: '',
  clientSecret: ''
};

var texts = [
  'les erreurs sont parfois amusants.', 
  'you can try to enter a longer phrase.', 
  'Questo un testo italiano.'
];

translator.detectArray(credentials, texts, function (err, result) {
  if (err) {
    console.log('Error', err);
    return;
  }

  console.log(result);
});

// => [ 'fr', 'en', 'it']
```

### Location

File:
- [`/lib/detectaray.js`](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/detectarray.js)

NPM Package:
- [`bingtranslator`](https://preview.npmjs.com/package/bingtranslator)