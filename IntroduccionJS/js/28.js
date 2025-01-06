// Classes

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    formatProduct() {
        return `Product ${this.name} costs ${this.price}`;
    }
}

const product2 = new Product('Monitor', 800);
const product3 = new Product('Mouse', 50);

//Inheritance

class Book extends Product { //extends
    constructor(name, price, isbn) {
        super(name, price);
        this.isbn = isbn;
    }

    formatProduct() {
        return `${super.formatProduct()} isbn ${this.isbn}`;
    }
}

const book = new Book('JavaScript', 120, '5834242552');
console.log(book.formatProduct());

console.log(product2.formatProduct());
//console.log(product3);