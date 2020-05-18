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
