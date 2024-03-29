# convert-size

[![nest badge](https://nest.land/badge-large.svg)](https://nest.land/package/convert-size)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0839cb70bf1d4276a450c94019892fb2)](https://app.codacy.com/gh/AliBasicCoder/convert-size?utm_source=github.com&utm_medium=referral&utm_content=AliBasicCoder/convert-size&utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/dm/convert-size)](https://npmjs.com/package/convert-size)
[![npm](https://img.shields.io/npm/v/convert-size)](https://npmjs.com/package/convert-size)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAliBasicCoder%2FconvertSize.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FAliBasicCoder%2FconvertSize?ref=badge_shield)

[![GitHub issues](https://img.shields.io/github/issues/AliBasicCoder/convert-size)](https://github.com/AliBasicCoder/convert-size/issues)
[![GitHub forks](https://img.shields.io/github/forks/AliBasicCoder/convert-size)](https://github.com/AliBasicCoder/convert-size/network)
[![GitHub stars](https://img.shields.io/github/stars/AliBasicCoder/convert-size)](https://github.com/AliBasicCoder/convert-size/stargazers)
[![GitHub license](https://img.shields.io/github/license/AliBasicCoder/convert-size)](https://github.com/AliBasicCoder/convert-size/blob/master/LICENSE)

convert-size is a package to convert a size with bytes to
units such as KB MB TB

## BIG NOTE

this package is now a mirror of to a bigger package called [convert-pro](https://github.com/AliBasicCoder/convert-pro) only convert.bytes
this means that this package will have exactly the same api as convert.bytes in [convert-pro](https://github.com/AliBasicCoder/convert-pro)

but DON'T WORRY IT WILL BE BACKWARDS COMPATIBLE

IT SHOULD WORK JUST FINE

if you have any issue or PR do it in [convert-pro](https://github.com/AliBasicCoder/convert-pro)'s github repo NOT in "convert-size"'s

## Usage

```js
// on node (commonjs)
const { default: convertSize } = require("convert-size");
// or (es6)
import convertSize from "convert-size";
// on deno (replace version with current version)
import convertSize from "https://x.nest.land/convert-size@version/mod.ts";
// or
import convertSize from "https://deno.land/x/convert_size@version/mod.ts";

convertSize(1000); // => 1 KB
convertSize(1000 * 1000); // => 1 MB
convertSize("1 MB"); // => 1000000
convertSize("1 GB", "MB"); // => 1000
convertSize(1000000, "KB"); // => 1000
convertSize("1 mb", "GB", { stringify: true }); // => 0.001 GB
// convert multiple units
convertSize("10 kb 1 mb"); // => 1001000
convertSize("10 kib 1 mb"); // => 1001024
convertSize("10 kib 1 mb", "kb"); // => 1001.024

// to know more about option read the options part below
convertSize(1000 * 1000, {
  accuracy: 0,
  shortcut: false,
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
