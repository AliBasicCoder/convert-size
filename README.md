# convert-size
[![npm version](https://img.shields.io/static/v1.svg?label=npm%20version&message=1.0.0&color=green)](https://www.npmjs.com/package/convert-size)
[![LICENSE](https://img.shields.io/static/v1.svg?label=LICENSE&message=MIT&color=green)](https://github.com/AliBasicCoder/convertSize/blob/master/LICENSE)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAliBasicCoder%2FconvertSize.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FAliBasicCoder%2FconvertSize?ref=badge_shield)


convert-size is a package to convert a size with bytes to 
units sush as KB MB TB

## exmaples
```js
const { convertSize } = require('convert-size');
// or
import { convertSize } from 'convert-size';

console.log(convertSize(1024)); // output 1 KB
console.log(convertSize(1024 * 1024)); // output 1 MB
console.log(convertSize(1024 * 1024 * 1024)); // output 1 GB
console.log(convertSize(1024 * 1024 * 1024 * 1024)); // output 1 TB
console.log(convertSize(1024 * 1024 * 1024 * 1024 * 1024)); // output 1 PB

```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAliBasicCoder%2FconvertSize.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FAliBasicCoder%2FconvertSize?ref=badge_large)