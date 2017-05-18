[![npm](https://img.shields.io/npm/l/rollup-plugin-bookmark.svg)](https://www.npmjs.org/package/rrollup-plugin-bookmark)
[![npm](https://img.shields.io/npm/v/rollup-plugin-bookmark.svg)](https://www.npmjs.org/package/rollup-plugin-bookmark)
[![npm](https://img.shields.io/npm/dm/rollup-plugin-bookmark.svg)](https://www.npmjs.org/package/rollup-plugin-bookmark)
[![Twitter](https://img.shields.io/badge/twitter-@qq393464140-blue.svg)](http://twitter.com/qq393464140)

# rollup-plugin-bookmark
> Rollup plugin to bundle js as bookmark.

## Installation
```
npm install --save-dev rollup-plugin-bookmark
```

## Usage
```js
import { rollup } from 'rollup';
import bookmark from 'rollup-plugin-bookmark';

rollup({
    entry : 'main.js',
    plugins : [
        bookmark(),
    ],
}).then(( bundle ) => {
    bundle.write({
        format : 'iife',
        dest : 'dist.js',
    });
});
```

* Or

```js
import bookmark from 'rollup-plugin-bookmark';

export default {
    format : 'iife',
    dest : 'dist.js',
    entry : './src/index.js',
    plugins : [
        bookmark(),
    ],
};

```

## License

MIT
