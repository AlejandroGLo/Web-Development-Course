//Iterators - For Loops


// i=0 // If i less than 10, run code and add 1
/* for(let i = 0; i < 10; i++) {
    console.log(i);
} */


//Checking for even numbers
/*for(let i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log(`Even number ${i}`)
    } else {
        console.log(`Odd number ${i}`)
    }
}*/

const cart = [
    {name: 'Monitor 27 inches', price: 500},
    {name: 'Television', price: 100},
    {name: 'Tablet', price: 200},
    {name: 'Headphones', price: 300},
    {name: 'Keyboard', price: 400},
    {name: 'Phone', price: 700}
];

for (let i=0; i < cart.length; i++) {
    console.log(cart[i].name);
}



// While Loop - Checks if the condition is met then runs code if it does

/*let i=0;

while(i<10){
    if(i % 2 === 0){
        console.log(`Even number ${i}`);
    } else {
        console.log(`Odd number ${i}`);
    }
    i++;
}*/

// Do While Loop - runs code then checks if the condition is met

let i=0;

do {
    console.log(i);
    i++;
} while(i<10);