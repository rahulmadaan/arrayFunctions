let { equal,deepEqual } = require('assert');
let {filter} = require('../src/library.js');

//----------------------------------------------------------
// functions required for testing filter function.
const isEven = function(number) {
  return number%2 === 0 ; 
}
const isOdd = function(number) {
  return number%2 != 0 ;
}
//-------------------------------------------------------------
const testFilter = function() {

  const test = function(testFunction,input,expectedOutput) {
    deepEqual(filter(input,testFunction),expectedOutput);
  }

  // empty input
  test(isOdd,[],[]);

  // with only one input
  test(isOdd,[1],[1]);
  test(isEven,[1],[]);

  // positive numbers
  test(isOdd,[11,12,13,20,21,24],[11,13,21]);
  test(isEven,[11,12,14,20,21,24],[12,14,20,24])

  // negative values
  test(isOdd,[-1,-2,-3,-4],[-1,-3]);
  test(isEven,[0,-2,-4,-7,-12,-15],[0,-2,-4,-12]);

  // array of array as input
  test(isEven,[[1,2,3],[4,5,6],[7,8,9]],[]);

  // array of object as input
  test(isEven,[{1:1,2:2},{3:3,4:4}],[]);

  console.log('All filter tests passed!!!');
}
testFilter();
