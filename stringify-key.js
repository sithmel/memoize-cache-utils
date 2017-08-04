var md5omatic = require('md5-o-matic');

function stringifyKey(k) {
  if (k === null) {
    return null;
  }
  if (typeof k === 'undefined' ||
    (typeof k === 'number' && isNaN(k)) ||
    k === '' ||
    (typeof k === 'object' && Object.keys(k).length === 0)) {
    throw new Error('Not a valid key');
  }
  if (typeof k !== 'string') {
    return md5omatic(JSON.stringify(k));
  }
  return k;
}

module.exports = stringifyKey;
