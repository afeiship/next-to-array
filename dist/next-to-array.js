/*!
 * name: @feizheng/next-to-array
 * description: To array for object or array like.
 * homepage: https://github.com/afeiship/next-to-array
 * version: 1.0.2
 * date: 2020-05-18T11:29:42.882Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var NUMBER = 'number';
  var STRING = 'string';
  var isArrayLike = function (inObj) {
    return typeof inObj.length === NUMBER && typeof inObj !== STRING;
  };

  nx.toArray = function (inObj, inLength) {
    var result = [];
    if (!inObj) return result;
    var length = inLength || inObj.length;

    if (isArrayLike(inObj) || typeof inLength === NUMBER) {
      var i = length;
      while (i--) result[i] = inObj[i];
      return result;
    }
    return [inObj];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toArray;
  }
})();

//# sourceMappingURL=next-to-array.js.map
