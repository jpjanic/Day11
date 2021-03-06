function splitArrayInGroups(arr, size) {
  var result = [];
  for (var i = 0; i < arr.length; i += size)
    result.push(arr.slice(i, i + size));
  return result;
}

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2)); // Change this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;
