let { equal,deepEqual } = require('assert');
let { filter } = require('../src/library.js');

//----------------------------------------------------------
// functions required for testing filter function.
const isEven = function(number) {
  return number%2 === 0 ; 
}
const isOdd = function(number) {
  return number%2 != 0 ;
}
const test = function(testFunction,input,expectedOutput) {
  deepEqual(filter(input,testFunction),expectedOutput);
}
//-------------------------------------------------------------

describe('Testing Filter function',function() {

  it('should return empty array on no input',function() {
    test(isOdd,[],[]);
  });

  it('with only one input',function(){
    test(isOdd,[1],[1]);
    test(isEven,[1],[]);
  });

  it('tests with positive numbers',function(){
    test(isOdd,[11,12,13,20,21,24],[11,13,21]);
    test(isEven,[11,12,14,20,21,24],[12,14,20,24])
  });

  it('tests with negative numbers',function(){
    test(isOdd,[-1,-2,-3,-4],[-1,-3]);
    test(isEven,[0,-2,-4,-7,-12,-15],[0,-2,-4,-12]);
  });
  it('input as array of array',function(){
    test(isEven,[[1,2,3],[4,5,6],[7,8,9]],[]);
  });

  it('input as array of objects',function(){
    test(isEven,[{1:1,2:2},{3:3,4:4}],[]);

  });
});
