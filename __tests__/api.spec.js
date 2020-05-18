const nx = require('@feizheng/next-js-core2');
require('../src/next-to-array');

describe('api.basic test', () => {
  test('nx.toArray STRING: "abc"', function () {
    var str = 'abc';
    expect(nx.toArray(str)).toEqual([str]);
  });

  test('nx.toArray argumetns: "1,2,3"', function () {
    var abc = function () {
      return nx.toArray(arguments).join('=');
    };
    var result = abc(1, 2, 3);
    expect(result).toBe('1=2=3');
  });

  test('nx.toArray  null/undefined', function () {
    var a;
    var b = null;
    expect(nx.toArray(a)).toEqual([]);
    expect(nx.toArray(b)).toEqual([]);
  });

  test('nx.toArray  [1,2,3] will create a new array', function () {
    var arr = [1, 2, 3];
    expect(nx.toArray(arr) === arr).toBe(false);
    expect(nx.toArray(arr)).toEqual([1, 2, 3]);
  });

  test('nx.toArray  [] Empty array', function () {
    var arr = [];
    expect(nx.toArray(arr) === arr).toBe(false);
    expect(nx.toArray(arr)).toEqual([]);
  });

  test('object like array but no length', () => {
    var obj = {
      0: 'a',
      1: 'b',
      2: 'c'
    };
    expect(nx.toArray(obj, 3)).toEqual(['a', 'b', 'c'])
  })

});
