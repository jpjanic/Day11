// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Beach", "Berry"];

// End of monitorsListArray array here
function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  // Only change code below this line
  var monitorsList = [];
  for (i = 0; i < newMonitorsList.length; i++) {
    monitorsList.push([monitorsListArray[i], i + 1]);
  }
  return monitorsList;
  // Only change code above this line
}
console.log(myMonitorsFunction(monitorsListArray)); // Change this line
module.exports = myMonitorsFunction;
