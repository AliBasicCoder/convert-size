# convert-size

[![npm version](https://img.shields.io/static/v1.svg?label=npm%20version&message=1.0.0&color=green)](https://www.npmjs.com/package/convert-size)
[![LICENSE](https://img.shields.io/static/v1.svg?label=LICENSE&message=MIT&color=green)](https://github.com/AliBasicCoder/convertSize/blob/master/LICENSE)

convert-size is a package to convert a size with bytes to 
units such as KB MB TB

## Usage

```js
const { convertSize } = require('convert-size');
// or
import { convertSize } from 'convert-size';

convertSize(1024); // => 1.00 KB
convertSize(1024 * 1024); // => 1.00 MB

convertSize (
    1024 * 1024,
    {
        accuracy: 0,
        shortcut: false
    }
) // => 1 Kilo Byte

```
