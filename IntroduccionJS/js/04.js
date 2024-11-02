// String o Cadena de texto
const tweet = "Monitor 20 Inches";
const product2 = "Monitor 24 Inches";
const email = 'email@email.com'

// Length
console.log(tweet.length); // .length is a Method to know the length of the string

// IndexOf
console.log(tweet.indexOf("Inches")); // .indexOf is a method to know the position of the word in the string
console.log(product2.indexOf("Tablet")); // If the word is not in the string it will return -1
console.log(email.indexOf("@")); // It will return the position of the @

// Includes
console.log(tweet.includes("Monitor")); // .includes is a method to know if the word is in the string



/*const product2 = String("Monitor 24 Inches");
const product3 = new String("Monitor 27 Inches"); We dont use these ones as much */

/*console.log(typeof product); //String
console.log(product2);
console.log(typeof product2); //String
console.log(product3);
console.log(typeof product3); // Object because of "new" */