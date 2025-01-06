// Arrow functions

const add2 = (n1, n2) => console.log(n1 + n2);

add2(5, 10);

const testing = () => console.log("Testing Arrow Functions")

testing();



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

months.forEach(month => {
    if(month == 'March') {
        console.log('March exists');
    }  
});

result2 = cart.some(product => {
    return product.name === 'Phone';
})
console.log(result2);

