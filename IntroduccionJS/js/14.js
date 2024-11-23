// Arrays

const numbers = [1, 2, 3, 4, 5];

console.table(numbers);

//const months = new Array('January', 'February', 'March', 'April', 'May');
//console.table(months);

const months = ['January', 'February', 'March', 'April', 'May'];


// Access to an array element
//console.log(months[0]);


// Know the extension of an array
// console.log(months.length);

// // Iterate an array
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// numbers.forEach(function(numbers) {
//     console.log(numbers);
// })

// numbers[5] = 6;
// console.table(numbers);

numbers.push(6,7,8); // Adds a value to the end of the array
numbers.unshift(-1, -2, -3); // Adds a value to the beginning of the array

// months.pop(); // Removes the last element of the array
// months.shift(); // Removes the first element of the array
months.splice(2, 1); // Removes a specific element of the array. The first number is the index and the second number 
// is the number of elements to remove. So in Jan, Feb, Mar, Apr, May, if we wanna delete March we would do 2,1

console.table(months);
console.table(numbers);


// Rest Operator or Spread Operator
// const newArray = [... months, 'June']; // This is a new array with the same elements of the previous array plus June
const newArray = ['June', ... months];
console.table(newArray);


