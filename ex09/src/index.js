// Only change code below this line
function myBouncer(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i] != false &&
      arr[i] != null &&
      arr[i] != 0 &&
      arr[i] != "" &&
      arr[i] != undefined &&
      arr[i] !== NaN
    ) {
      newArr.push(arr[i]);
    }
  }
  return newArr.filter(Boolean);
}
// Only change code above this line

console.log(myBouncer([7, "ate", "", false, 9])); // Change this line
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;
