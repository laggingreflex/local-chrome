const chromeFinder = require('chrome-launcher/dist/chrome-finder');
const { getPlatform } = require('chrome-launcher/dist/utils');

const platform = getPlatform();
const [localChrome] = chromeFinder[platform]();

// console.log('Using local chrome:', localChrome);

module.exports = localChrome;
