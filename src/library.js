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
module.exports = {filter,map};
