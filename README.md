# local-chrome

Gives you the path to locally installed Chrome

## Install

```
npm i local-chrome
```

## Usage

```js
const localChrome = require('local-chrome');
```

Example usage:

```js
const Puppeteer = require('puppeteer-core');
const localChrome = require('local-chrome');
Puppeteer.launch({
  executablePath: localChrome
})
```

