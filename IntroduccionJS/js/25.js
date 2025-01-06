//For each & Map

const cart = [
    {name: 'Monitor 27 inches', price: 500},
    {name: 'Television', price: 100},
    {name: 'Tablet', price: 200},
    {name: 'Headphones', price: 300},
    {name: 'Keyboard', price: 400},
    {name: 'Phone', price: 700}
];

// For Each (For Arrays) -  No need for iterators here
cart.forEach(product => console.log(product))

// Map
cart.map(product => console.log(product))

//Difference between these two: When we want to iterate over array and show the elements use ForEach
//If we wanna create a new array, use map