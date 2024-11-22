// Arrays

const numbers = [1, 2, 3, 4, 5];

console.table(numbers);

//const months = new Array('January', 'February', 'March', 'April', 'May');
//console.table(months);

const months = ['January', 'February', 'March', 'April', 'May'];
console.table(months);

// Access to an array element
console.log(months[0]);


// Know the extension of an array
console.log(months.length);

// Iterate an array
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

months.forEach(function(numbers) {
    console.log(numbers);
})


