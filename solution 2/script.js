const numbers = [16, 17, 233, 4, 346, 343, 94, 853, 9, 10];

numbers.forEach(number => {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
});
