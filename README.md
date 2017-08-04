memoize-cache-utils
===================
Utilities for memoize-cache.

key-getter
==========
This is an utility function used to generate a function that returns a key from a variable number of arguments.
```js
var keyGetter = require('memoize-cache-utils/key-getter')
var getKey = keyGetter(func, prefix);
```
It takes 2 arguments:
* a function that returns a key (if undefined the default will be a function returning null). Valid outputs are: undefined, null, a string or an object.
* a prefix. It is added to the key (default '').

If the function is undefined, it will be replaced with a function returning "_default".
The following transformation will be applied to the result of the function:
* null will be returned as it is
* a non empty string will be used as it is
* objects/numbers will be serialized and hashed

keys-getter
===========
It is equivalent to key-getter but it expects a function to return an array of keys. It defaults to [] (empty array).
