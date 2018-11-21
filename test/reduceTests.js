let assert = require('assert');
let { reduce } = require('../src/library.js');
//------------------------------------------------------
// functions required for testing reduce function
const sum = function(a,b){
  return a+b;
}
//------------------------------------------------------

describe('reduce',function(){
  it('should work for integers',function(){
    assert.deepEqual(reduce(sum,[1,2]),3);
    assert.deepEqual(reduce(sum,[1,2],4),7);
  });
  it('should work for undefined',function(){
    assert.deepEqual(reduce(sum,[]),undefined);
  });

  it('should work with initial value',function(){
    assert.deepEqual(reduce(sum,[1,2],1),4);
  });
  it('should return initializer 0, if empty array is passed and inititalizer is 0 ',function(){
    assert.deepEqual(reduce(sum,[],0),0);

  });

});
