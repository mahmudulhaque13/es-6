// array.reduce((accumulator, currentValue) => {
// logic
// }, initialValue);

// const numbers = [10, 70, 30, 40];

// const sum = numbers.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

const cart = [
  { name: "Shirt", price: 600, qty: 2 },
  { name: "Pant", price: 400, qty: 1 },
];

const totalPrice = cart.reduce((total, item) => {
  return total + item.price * item.qty;
}, 0);

console.log(totalPrice);
