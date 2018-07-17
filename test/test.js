var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-to-array');

describe('next/to-array', function () {

  it('nx.toArray STRING: "abc"', function () {
    var str = "abc";

    assert.deepEqual(nx.toArray(str), [str]);
  });


  it('nx.toArray argumetns: "1,2,3"', function () {
    var abc = function () {
      return nx.toArray(arguments).join('=');
    };
    var result = abc(1, 2, 3);
    assert.equal(result, '1=2=3');
  });


  it('nx.toArray  null/undefined', function () {
    var a;
    var b = null;
    assert.deepEqual(nx.toArray(a), []);
    assert.deepEqual(nx.toArray(b), []);
  });


  it('nx.toArray  [1,2,3] will create a new array', function () {
    var arr = [1, 2, 3];
    assert.equal(nx.toArray(arr) === arr, false);
    assert.deepEqual(nx.toArray(arr), [1, 2, 3]);
  });



});
