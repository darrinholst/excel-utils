# excel-utils

[![npm-version](https://img.shields.io/npm/v/excel-utils.svg)](https://www.npmjs.com/package/excel-utils)
[![Build Status](https://travis-ci.org/darrinholst/excel-utils.svg?branch=master)](https://travis-ci.org/darrinholst/excel-utils)
[![dependencies](https://david-dm.org/darrinholst/excel-utils/status.svg)](https://david-dm.org/darrinholst/excel-utils)
[![dev dependencies](https://david-dm.org/darrinholst/excel-utils/dev-status.svg)](https://david-dm.org/darrinholst/excel-utils?type=dev)
[![peer dependencies](https://david-dm.org/darrinholst/excel-utils/peer-status.svg)](https://david-dm.org/darrinholst/excel-utils?type=peer)

Some utilities if you're lucky enough to be programmatically working with spreadsheets.

### Installation

#### node

    npm install excel-utils

### API

##### `encodeColumn(column: string)`

Returns the alphabetic column as a number. Useful for incrementing columns.

``` js
import {encodeColumn} from 'excel-utils';

encodeColumn('AA'); // => 27
```

##### `decodedColumn(column: number)`

Turns the numerically encoded column back in to the alphabetic representation.

``` js
import {decodeColumn} from 'excel-utils';

encodeColumn(27); // => 'AA'
```

### Development
    git clone https://github.com/darrinholst/excel-utils
    cd excel-utils
    npm install
    npm test

### Release
    release-it [semver]
