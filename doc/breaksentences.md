`translator.breakSentences(credentials, text, language, callback)`
[&#x24C8;](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/breaksentences.js "View in source")

Use the detect method to identify the language of a selected piece of text.

#### Arguments
1. `credentials` *(`Object`)*: An object with the following properties
  - `clientId` *(`String`)*: The Client ID from the registered app.
  - `clientSecret` *(`String`)*: The Client Secret from the registered app. 
2. `text` *(String)*: A string representing the text to split into sentences. The size of the text must not exceed 10000 characters.
3. `language` *(`String`)*: A string representing the language code of input text.
4. `callback` *(`Function`)*: A function with the following parameters.
  - `err` *(`Error`)*: An error if one occurred, else null.
  - `sentenceLengths` *(`Array`)*: An array of integers representing the lengths of the sentences. The length of the array is the enumber of sentences, and the values are the length of each sentence. 

#### Example 

The following example uses a detect to get the language of the text

```js
var translator = require('bingtranslator');

var credentials = {
  clientId: '',
  clientSecret: ''
};

var text = 'Use the Microsoft Translator webpage widget to deliver your site in the visitor’s language. '
  + 'The visitor never leaves your site, and the widget seamlessly translates each page as they navigate.';

translator.breakSentences(credentials, text, 'en', function(err, lengths) {
  if (err) {
    console.log('error', err);
    return;
  }

  console.log(lengths);
}

// => [ 92, 100 ]
```

### Location

File:
- [`/lib/breaksentences.js`](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/breaksentences.js)

NPM Package:
- [`bingtranslator`](https://preview.npmjs.com/package/bingtranslator)