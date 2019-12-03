var stringifyKey = require('./stringify-key')

module.exports = function (func, prefix) {
  prefix = prefix || ''
  func = func || function () { return '_default' }
  return function () {
    var args = Array.prototype.slice.call(arguments)
    var k = func.apply(undefined, args)
    var newKey = stringifyKey(k)
    if (newKey === null) return null
    return prefix + newKey
  }
}
