// Create temps array here
var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];
// End of temps array here
function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  // Only change code below this line
  for (i = 0; i < arr.length; i++) {
    newTemps = arr[i];
    var sum = 0;

    for (j = 0; j < newTemps.length; j++) {
      sum += newTemps[j];
    }
    var averageDayValue = sum / newTemps.length;
    averageDayTemp.push(averageDayValue);
  }
  // Only change code above this line
  return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
