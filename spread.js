const numbers = [23, 65, 99, 21, 34, 199];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);
// console.log(max);
const MaxNumberFromArray = Math.max(...numbers);
// console.log(MaxNumberFromArray);

const numbers2 = [...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);