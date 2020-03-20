# convert-size

[![GitHub issues](https://img.shields.io/github/issues/AliBasicCoder/convert-size)](https://github.com/AliBasicCoder/convert-size/issues)
[![GitHub forks](https://img.shields.io/github/forks/AliBasicCoder/convert-size)](https://github.com/AliBasicCoder/convert-size/network)
[![GitHub stars](https://img.shields.io/github/stars/AliBasicCoder/convert-size)](https://github.com/AliBasicCoder/convert-size/stargazers)
[![GitHub license](https://img.shields.io/github/license/AliBasicCoder/convert-size)](https://github.com/AliBasicCoder/convert-size/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/convert-size)](https://npmjs.com/package/convert-size)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAliBasicCoder%2FconvertSize.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FAliBasicCoder%2FconvertSize?ref=badge_shield)

convert-size is a package to convert a size with bytes to
units such as KB MB TB

## Usage

```js
const { default: convertSize } = require("convert-size");
// or
import convertSize from "convert-size";

convertSize(1000); // => 1 KB
convertSize(1000 * 1000); // => 1 MB
convertSize("1 MB"); // => 1000000
convertSize("1 GB", "MB"); // => 1000
convertSize(1000000, "KB"); // => 1000
convertSize("1 mb", "GB", { stringify: true }); // => 0.001 GB

// to know more about option read the options part below
convertSize(1000 * 1000, {
  accuracy: 0,
  shortcut: false
}); // => 1 Kilo Byte
```

## options

### accuracy

this options is the accuracy of the size or
how many **digits** are there after the dot

example:

```js
import { convertSize } from "convert-size";

convertSize(1024, { accuracy: 0 }); // => 1 KB
```

### shortcut

this option tels the function to use the **shortcuts**
or the **words**

example:

```js
import { convertSize } from "convert-size";

convertSize(1024, { shortcut: false }); // => 1.00 Kilo Byte
```

### lowerCase

this option tels the function to use **lower case** letters

```js
import { convertSize } from "convert-size";

convertSize(1024, { lowerCase: true }); // => 1 kb
```

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAliBasicCoder%2FconvertSize.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FAliBasicCoder%2FconvertSize?ref=badge_large)

Copyright (c) 2019 AliBasicCoder
