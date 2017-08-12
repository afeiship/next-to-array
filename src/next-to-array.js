(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.toArray = function (inObj) {
    if (!inObj) return [];
    if (nx.isArrayLike(inObj)) return slice.call(inObj);
    return [inObj];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toArray;
  }

}());
