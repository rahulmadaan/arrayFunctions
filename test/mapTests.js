let { equal,deepEqual } = require('assert');
let { map } = require('../src/library.js');

//----------------------------------------------------------
// functions required for testing map function.
const isEven = function(number) {
  return number%2 === 0 ; 
}
const isOdd = function(number) {
  return number%2 != 0 ;
}
const stringLength = function(string) {
  return string.length;
}

const testMap = function() {

  const test = function(testFunction,input,expectedOutput) {
    deepEqual(map(input,testFunction),expectedOutput);
  }
  test(isOdd,[1],[true]);

  // empty input
  test(isOdd,[],[]);

  // with only one input
  test(isOdd,[1],[1]);
  test(isEven,[1],[false]);

  // positive numbers
  test(isOdd,[11,12,13,20,21,24],[true,false,true,false,true,false]);
  test(isEven,[11,12,14,20,21,24],[false,true,true,true,false,true])

  // negative values
  test(isOdd,[-1,-2,-3,-4],[true,false,true,false]);
  test(isEven,[0,-2,-4,-7,-12,-15],[true,true,true,false,true,false]);

  // array of array as input
  test(isEven,[[1,2,3],[4,5,6],[7,8,9]],[false,false,false]);

  console.log('All map tests passed!!!');
}
testMap();
