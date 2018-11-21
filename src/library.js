const filter = function(input,inputFunction) {
  let filteredData = [];
  for(let value of input) {
    if(inputFunction(value)) { filteredData.push(value); }
  }
  return filteredData;
}

const map = function(input,inputFunction) {
  let mappedData = [];
  for(let value of input) {
    mappedData.push(inputFunction(value));
  }
  return mappedData;
}

const reduce = function(reducerFunction,inputArray,accumulator) {
  let index=0;
 if(accumulator == undefined) {
   accumulator = inputArray[0];
   index=1;
 }
 while(index<inputArray.length) {
   accumulator = reducerFunction(accumulator,inputArray[index]);
   index++;
 }
  return accumulator;
}
module.exports = {filter,map,reduce};

