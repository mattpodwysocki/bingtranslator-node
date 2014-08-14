`translator.translateArray(credentials, texts, from, to, callback)`
[&#x24C8;](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/translatearray.js "View in source")

Translates a text string from one language to another.

#### Arguments
1. `credentials` *(`Object`)*: An object with the following properties
  - `clientId` *(`String`)*: The Client ID from the registered app.
  - `clientSecret` *(`String`)*: The Client Secret from the registered app. 
2. `text` *(`Array`)*: An array containing the texts for translation. All strings must be of the same language. The total of all texts to be translated must not exceed 10000 characters. The maximum number of array elements is 2000.
3. `from` *(`String`)*: A string representing the language code of the translation text. If left empty the response will include the result of language auto-detection.
4. `to` *(`String`)*: A string representing the language code to translate the text into.
5. `callback` *(`Function`)*: A function with the following parameters.
  - `err` *(`Error`)*: An error if one occurred, else null.
  - `translated` *(`Object`)*: a TranslateArrayResponse array. Each TranslateArrayResponse has the following elements:
    - Error: Indicates an error if one has occurred. Otherwise set to null.
    - OriginalSentenceLengths: An array of integers indicating the length of each sentence in the original source text. The length of the array indicates the number of sentences.
    - TranslatedText: The translated text.
    - TranslatedSentenceLengths: An array of integers indicating the length of each sentence in the translated text. The length of the array indicates the number of sentences.
    - State: User state to help correlate request and response. Returns the same content as in the request.

#### Example 

The following example uses a detect to get the language of the text

```js
var translator = require('bingtranslator');

var credentials = {
  clientId: '',
  clientSecret: ''
};

var texts = [
  'The answer lies in machine translation.', 
  'Simply copy and paste a code snippet anywhere', 
  'the best machine translation technology cannot always provide translations tailored to a site or users like a human'
];

translator.translateArray(credentials, text, 'en', 'pl', function(err, translated) {
  if (err) {
    console.log('error', err);
    return;
  }

  console.log('Translated', translated);
});

/*
[ { From: 'en',
    OriginalTextSentenceLengths: [ 39 ],
    TranslatedText: 'Odpowiedz lezy w tlumaczenia maszynowego.',
    TranslatedTextSentenceLengths: [ 41 ] },
  { From: 'en',
    OriginalTextSentenceLengths: [ 45 ],
    TranslatedText: 'Wystarczy skopiowac i wkleic fragment kodu nigdzie',
    TranslatedTextSentenceLengths: [ 50 ] },
  { From: 'en',
    OriginalTextSentenceLengths: [ 115 ],
    TranslatedText: 'Najlepsza technologia tlumaczenia maszynowego nie zawsze mo
ze dostarczyc tlumaczenia dostosowane do witryny lub uzytkowników jak czlowieka',
    TranslatedTextSentenceLengths: [ 138 ] } ]
*/
```

### Location

File:
- [`/lib/translatearray.js`](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/translatearray.js)

NPM Package:
- [`bingtranslator`](https://preview.npmjs.com/package/bingtranslator)