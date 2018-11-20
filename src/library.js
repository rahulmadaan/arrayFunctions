const filter = function(input,inputFunction) {
  let filteredData = [];
  for(let value of input) {
    if(inputFunction(value)) { filteredData.push(value); }
  }
  return filteredData;
}
module.exports = {filter};
