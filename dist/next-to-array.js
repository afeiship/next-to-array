(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NUMBER = 'number';
  var STRING = 'string';
  var isArrayLike = function(inObj) {
    return typeof inObj.length === NUMBER && typeof inObj !== STRING;
  };

  nx.toArray = function(inObj) {
    var result = [];
    if (!inObj) return result;
    if (isArrayLike(inObj)) {
      var i = inObj.length;
      while (i--) result[i] = inObj[i];
      return result;
    }
    return [inObj];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toArray;
  }
})();
