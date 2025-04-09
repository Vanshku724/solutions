
let ages = [12, 15, 18, 20, 17, 25, 16, 19];

let eligibleToVote = ages.filter(function(age) {
  return age >= 18;  
});
console.log(eligibleToVote);
