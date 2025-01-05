// Functions with paremeters and args

function add(num1, num2) { //num1 and 2 are parameters which go inside the body of the function
    console.log(num1 + num2);
}
add(10, 10); // We pass arguments / real values
add(3, 5); 
add(1, 2); 

// Function expression

const add2 = function(n1, n2){
    console.log(n1+n2);
}

add2(5, 10);