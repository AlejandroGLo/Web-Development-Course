// OOP Object Oriented Programming & Prototypes

// An object literal example
const product = {
    name: 'Ipad',
    price: 500
}

// Object Constructor (More dynamic but less common)

function Product(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
}

const product2 = new Product('Monitor', 800);
const product3 = new Product('Mouse', 50, 'black')


function formatProduct(product) { // If we wanted to create a client object like the Product one, we would also have to do this for client
    return `Product: ${product.name} costs ${product.price}`;
}

//Prototype allows us to create functions that are used in a specific object

Product.prototype.formatProduct = function() {
    return `Product: ${this.name} costs ${this.price}`;
}

console.log(product2);
console.log(product3);
console.log(formatProduct(product2));


