// array.reduce((accumulator, currentValue) => {
// logic
// }, initialValue);

const numbers = [10, 70, 30, 40];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);
