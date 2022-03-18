# Envato License Checker

[![npm][npm-image]][npm-url]
[![MIT License][mit-license-image]][mit-license-url]

[npm-url]: https://www.npmjs.com/package/envato-license-checker
[npm-image]: https://img.shields.io/npm/v/envato-license-checker.svg?label=npm%20version
[mit-license-url]: LICENSE
[mit-license-image]: https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667

## About

A class where you can check the purchase code provided by envato so you can add a licensing system to your Envato products.

## Installation

`npm install --save envato-license-checker`

## Usage

```js
import EnvatoLicenseChecker from 'envato-license-checker';
//or
const EnvatoLicenseChecker = require('envato-license-checker');

(async () => {
    EnvatoLicenseChecker.setBearerToken('envato baerar token');
    ler result = await EnvatoLicenseChecker.check('license code');
    // result = false or Object (Purchase data)
})();
```