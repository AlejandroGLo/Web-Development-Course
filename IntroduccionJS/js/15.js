// Array Methods

const months = ['January', 'February', 'March', 'April', 'May'];

const cart = [
    {name: 'Monitor 27 inches', price: 500},
    {name: 'Television', price: 100},
    {name: 'Tablet', price: 200},
    {name: 'Headphones', price: 300},
    {name: 'Keyboard', price: 400},
    {name: 'Phone', price: 700}
];

//forEach

months.forEach(function(month) {
    if(month == 'March') {
        console.log('March exists');
    }
    
});


// Includes

const result = months.includes('March');
console.log(result);

// const result2 = cart.includes('Phone');Doesnt work because it is an array of objects
// Some is good for arrays of objects

result2 = cart.some(function(product){
    return product.name === 'Phone';
})
console.log(result2);


// Reduce. what is does is to add all the values of an array

result3 = cart.reduce(function(total, product){
    return total + product.price;
}, 0);

console.log(result3);

// Filter (To filter elements in an array)

result4 = cart.filter(function(product){
    return product.price > 400;
} );

console.log(result4);


