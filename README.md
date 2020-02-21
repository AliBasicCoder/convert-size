# convert-size

[![npm version](https://img.shields.io/npm/v/convert-size.svg)](https://www.npmjs.com/package/convert-size)
[![LICENSE](https://img.shields.io/static/v1.svg?label=LICENSE&message=MIT&color=green)](https://github.com/AliBasicCoder/convertSize/blob/master/LICENSE)

convert-size is a package to convert a size with bytes to 
units such as KB MB TB

## Usage

```js
const { default: convertSize } = require('convert-size');
// or
import convertSize from 'convert-size';

convertSize(1000); // => 1 KB
convertSize(1000 * 1000); // => 1 MB
convertSize("1 MB") // => 1000000
convertSize("1 GB", "MB") // => 1000
convertSize(1000000, "KB") // => 1000
convertSize("1 mb", "GB", { stringify: true }) // => 0.001 GB

// to know more about option read the options part below
convertSize (
    1000 * 1000,
    {
        accuracy: 0,
        shortcut: false
    }
) // => 1 Kilo Byte

```

## options

### accuracy

this options is the accuracy of the size or
how many **digits** are there after the dot

example:

``` js
import { convertSize } from 'convert-size';

convertSize(1024, { accuracy: 0 }) // => 1 KB
```

### shortcut

this option tels the function to use the **shortcuts**
or the **words**

example:

``` js
import { convertSize } from 'convert-size';

convertSize(1024, { shortcut: false }) // => 1.00 Kilo Byte
```

### lowerCase

this option tels the function to use **lower case** letters

``` js
import { convertSize } from 'convert-size';

convertSize(1024, { lowerCase: true }) // => 1 kb
```

## LICENSE

MIT License

Copyright (c) 2019 AliBasicCoder
