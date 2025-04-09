// Define an array of words
let words = ["apple", "banana", "cherry", "date"];


let Characters = words.reduce(function(acc, word) {
  return acc + word.length;  

},0);
console.log(Characters);

