[![GitHub version](http://img.shields.io/github/tag/mattpodwysocki/bingtranslator-node.svg)](https://github.com/mattpodwysocki/bingtranslator-node)
[![NPM version](http://img.shields.io/npm/v/bingtranslator.svg)](https://npmjs.org/package/bingtranslator)

Bing Translator API for Node.js
===============================

This project is an implementation [Bing Translator](http://www.bing.com/translator/) API for Node.js.  This uses the [Bing Translator Ajax API](http://msdn.microsoft.com/en-us/library/ff512404.aspx) to make calls to such methods as detect and translate.  In order for to use this library, you must have an Azure Data Market account and a subscription to the Bing Translator, which you can find more information [here](http://msdn.microsoft.com/en-us/library/hh454950.aspx). 

## Getting Started ##

There are a number of ways to get started with the Bing Translator API for Node.js.

### Download the Source ###

To download the source, type in the following:
```bash
git clone https://github.com/mattpodwysocki/bingtranslator-node.git
cd ./bingtranslator-node
```
### Installing with [NPM](https://npmjs.org/) ###
```bash
npm install bingtranslator
```
## Example ##

Below is an example of using detect and translate to take some arbitrary text and translate it to English.

```js
var credentials = {
  clientId: '',     /* Client ID from the registered app */
  clientSecret: ''  /* Client Secret from the registered app */
}
var translator = require('bingtranslator');

var text = 'Witam nazywam się Mateusz!';

translator.detect(credentials, text, detectCb);

function detectCb(err, from) {
  if (err) {
    console.log('error', err);
    return;
  }

  translator.translate(credentials, text, from, 'en', translateCb);
}

function translateCb(err, translated) {
  if (err) {
    console.log('error', err);
    return;
  }

  console.log(translated);
}

// => Hi my name is Matthew!
``` 

## Documentation ##

- `translator`
  - [`breakSentences`](doc/breaksentences.md)
  - [`detect`](doc/detect.md)
  - [`detectArray`](doc/detectarray.md)
  - [`getLanguageNames`](doc/getlanguagenames.md)
  - [`getLanguagesForSpeech`](doc/getlanguagesforspeech.md)
  - [`getLanguagesForTranslate`](doc/getlanguagesfortranslate.md)
  - [`speak`](doc/speak.md)
  - [`translate`](doc/translate.md)
  - [`translateArray`](doc/translatearray.md)

## License ##

The MIT License (MIT)

Copyright (c) 2014 Matthew Podwysocki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
