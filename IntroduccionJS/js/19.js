/*function add(n1, n2) {
    return n1 + n2;
}

const result = add(2, 3);

console.log(result)*/

let total = 0;

function addCart(price) {
    return total += price;
}

function calculateTax(total){
    return 1.15 * total;
}

total = addCart(200);
total = addCart(400);
total = addCart(600);
console.log(total);


const totalPayment = calculateTax(total);

console.log(`Total payment with taxes is: ${totalPayment}`);