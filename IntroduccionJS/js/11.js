//objects

const product = {
    productName : "20 Inches Monitor",
    price : 300,
    available : true
}



// const productPrice = product.price;
// const productName = product.productName;
// console.log(productPrice);
// console.log(productName);



//Destructuring - Extracts the values of an object and stores them in variables

const {price, productName} = product;

console.log(price);
