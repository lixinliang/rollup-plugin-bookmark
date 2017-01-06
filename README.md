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
