// Only change code below this line
function myMutation(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].toLowerCase();
  }
  for (var j = 0; j < newArr[1].length; j++) {
    if (newArr[0].indexOf(newArr[1][j]) < 0) return false;
  }
  return true;
}

// Only change code above this line
console.log(myMutation(["hello", "hey"])); // Change this line
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;
