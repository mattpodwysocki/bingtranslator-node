`translator.translate(credentials, text, from, to, callback)`
[&#x24C8;](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/translate.js "View in source")

Translates a text string from one language to another.

#### Arguments
1. `credentials` *(`Object`)*: An object with the following properties
  - `clientId` *(`String`)*: The Client ID from the registered app.
  - `clientSecret` *(`String`)*: The Client Secret from the registered app. 
2. `text` *(`String`)*: A string representing the text from an unknown language. The size of the text must not exceed 10000 characters.
3. `from` *(`String`)*: A string representing the language code of the translation text. If left empty the response will include the result of language auto-detection.
4. `to` *(`String`)*: A string representing the language code to translate the text into.
5. `callback` *(`Function`)*: A function with the following parameters.
  - `err` *(`Error`)*: An error if one occurred, else null.
  - `translated` *(`String`)*: A string representing the translated text. If you previously use `addTranslation` or `addTranslationArray` to enter a translation with a rating of 5 or higher for the same source sentence, Translate returns only the top choice that is available to your system. The "same source sentence" means the exact same (100% matching), except for capitalization, white space, tag values, and punctuation at the end of a sentence. If no rating is stored with a rating of 5 or above then the returned result will be the automatic translation by Microsoft Translator. 

#### Example 

The following example uses a detect to get the language of the text

```js
var translator = require('bingtranslator');

var credentials = {
  clientId: '',
  clientSecret: ''
};

var text = 'Witam nazywam się Mateusz!';

translator.translate(credentials, text, 'pl', 'en', function(err, translated) {
  if (err) {
    console.log('error', err);
    return;
  }

  console.log('Translated', translated);
});

// => Hi my name is Matthew!
```

### Location

File:
- [`/lib/translate.js`](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/translate.js)

NPM Package:
- [`bingtranslator`](https://preview.npmjs.com/package/bingtranslator)