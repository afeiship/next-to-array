(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var NUMBER = 'number';
  var STRING = 'string';
  var isArrayNotString = function (inObj) {
    return typeof inObj.length === NUMBER && typeof inObj !== STRING;
  };

  nx.toArray = function (inObj) {
    if (!inObj) return [];
    if (isArrayNotString(inObj)) return nx.slice(inObj);
    return [inObj];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toArray;
  }

}());
