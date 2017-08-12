(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var isArrayLike = function(inObj){
    typeof inObj.length == 'number'
  };

  nx.toArray = function (inObj) {
    if (!inObj) return [];
    if (isArrayLike(inObj)) return slice.call(inObj);
    return [inObj];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toArray;
  }

}());
