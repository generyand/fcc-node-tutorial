const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const arr2 = ['1', '2', '3', '4', '5', '6', '7'];

const [a, b, c, ...rest] = arr1;


/* console.log(a);
console.log(b);
console.log(rest); */

const newArray = [...arr1, ...arr2];

console.log(newArray);






























/* let num1 = 3;
let num2 = 7;

console.log(`first, num1 is ${num1} and num2 is ${num2}`);

[num1, num2] = [num2, num1];

console.log(`now, num1 is ${num1} and num2 is ${num2}`); */