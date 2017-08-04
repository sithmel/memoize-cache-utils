var stringifyKey = require('./stringify-key');

module.exports = function (func, prefix) {
  prefix = prefix || '';
  func = func || function () { return []; };
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var keys = func.apply(undefined, args);
    if (!Array.isArray(keys)) {
      return [];
    }
    return keys.map(stringifyKey)
      .filter(function (k) { return k !== null; })
      .map(function (k) { return prefix + k; });
  };
};
