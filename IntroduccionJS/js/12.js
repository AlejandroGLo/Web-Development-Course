"user strict"; // Use strict mode

//objects

const product = {
    productName : "20 Inches Monitor",
    price : 300,
    available : true
}

// Object.freeze(product); //This makes the object immutable
Object.seal(product); //This makes the object immutable but allows to modify the properties

product.image = "image.jpg";

console.log(Object.isFrozen(product));

console.log(product);