`translator.detect(credentials, text, callback)`
[&#x24C8;](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/detect.js "View in source")

Use the detect method to identify the language of a selected piece of text.

#### Arguments
1. `credentials` *(`Object`)*: An object with the following properties
  - `clientId` *(`String`)*: The Client ID from the registered app.
  - `clientSecret` *(`String`)*: The Client Secret from the registered app. 
2. `text` *(String)*: A string representing the text from an unknown language. The size of the text must not exceed 10000 characters.
3. `callback` *(`Function`)*: A function with the following parameters.
  - `err` *(`Error`)*: An error if one occurred, else null.
  - `language` *(`String`)*: A string containing a two-character Language code for the given text.  

#### Example 

The following example uses a detect to get the language of the text

```js
var translator = require('bingtranslator');

var credentials = {
  clientId: '',
  clientSecret: ''
};

var text = 'Witam nazywam się Mateusz!';

translator.detect(credentials, text, detectCb);

function detectCb(err, from) {
  if (err) {
    console.log('error', err);
    return;
  }

  console.log(from);
}

// => pl
```

### Location

File:
- [`/lib/detect.js`](https://github.com/mattpodwysocki/bingtranslator-node/blob/master/lib/detect.js)

NPM Package:
- [`bingtranslator`](https://preview.npmjs.com/package/bingtranslator)