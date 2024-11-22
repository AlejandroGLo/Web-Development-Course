const product = {
    productName : "20 Inches Monitor",
    price : 300,
    available : true
}

const measurements = {
    weight : '1kg',
    size : '1m'
}

const newProduct = {...product, ...measurements} // Spread Operator

// Joining Two objects
console.log(newProduct) // { productName: '20 Inches Monitor', price: 300, available: true, weight: '1kg', size: '1m' }

console.log(product) // { productName: '20 Inches Monitor', price: 300, available: true }


