//objects

const productName = "20 Inches Monitor";
const price = 300;
const available = true;

const product = {
    productName : "20 Inches Monitor",
    price : 300,
    available : true
}

//console.log(product);
// console.log(product.productName);
// console.log(product.price);
// console.log(product.available);

// console.log(product["productName"]); Another way of doing it

// Adding new properties to the object
product.image = "image.jpg";

//Deleting properties
delete product.available;
console.log(product);

