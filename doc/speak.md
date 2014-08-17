`translator.speak(credentials, texts, language, format, options, callback)`
[&#x24C8;](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/speak.js "View in source")

Returns a string which is a URL to a wave or mp3 stream of the passed-in text being spoken in the desired language.

#### Arguments
1. `credentials` *(`Object`)*: An object with the following properties
  - `clientId` *(`String`)*: The Client ID from the registered app.
  - `clientSecret` *(`String`)*: The Client Secret from the registered app. 
2. `text` *(`String`)*: A string containing a sentence or sentences of the specified language to be spoken for the wave stream. The size of the text to speak must not exceed 2000 characters.
3. `language` *(`String`)*: A string representing the supported language code to speak the text in. The code must be present in the list of codes returned from the method `getLanguagesForSpeak`.
4. `[format]` *(`String`)*: A string specifying the content-type ID. Currently, "audio/wav" and "audio/mp3" are available. The default value is "audio/wav".
5. `[options]` *(`String`)*: A string specifying the quality of the audio signals. Currently, "MaxQuality" and "MinSize" are available.  With "MaxQuality", you can get the voice(s) with the highest quality, and with "MinSize", you can get the voices with the smallest size. If no value is provided, we default to "MinSize".
6. `callback` *(`Function`)*: A function with the following parameters.
  - `err` *(`Error`)*: An error if one occurred, else null.
  - `translated` *(`Object`)*: a TranslateArrayResponse array. Each TranslateArrayResponse has the following elements:
    - Error: Indicates an error if one has occurred. Otherwise set to null.
    - OriginalSentenceLengths: An array of integers indicating the length of each sentence in the original source text. The length of the array indicates the number of sentences.
    - TranslatedText: The translated text.
    - TranslatedSentenceLengths: An array of integers indicating the length of each sentence in the translated text. The length of the array indicates the number of sentences.
    - State: User state to help correlate request and response. Returns the same content as in the request.

#### Example 

The following example gets a URL of a stream and then gets the bytes.

```js
var translator = require('bingtranslator');

var credentials = {
  clientId: '',
  clientSecret: ''
};

var url = require('url');

var language = 'en';
var format = 'audio/mp3';
var options = 'MinSize';
var text = 'Use pixels to express.';

translator.speak(credentials, text, language, format, options, function(err, address) {
  if (err) {
    console.log('error', err);
    return;
  }

  var parsed = url.parse(address);

  var protocol = require(parsed.protocol.substring(0, parsed.protocol.length - 1));

  var requestOptions = {
    hostname: parsed.hostname,
    path: parsed.path,
    method: 'GET'
  };

  var req = protocol.request(requestOptions, function (response) {
    var data = '';
    response.on('data', function (d) {
      data += d;
    });

    response.on('error', function (err) {
      console.log(error);
    });

    response.on('end', function () {
      // Do something with the audio bytes
    });
  });

  req.setHeader('Content-Type', format);
  req.end();
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