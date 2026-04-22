//write a functtion
function printHelloWorld() {
  console.log("Hello World");
}

printHelloWorld();


//create function greet and give greetings for different names so it is dynamic;
function greet(name){
    console.log("Hello, "+name);
}
greet("Manish");

//Create a function that adds two values
function sum(a,b){
    let add = a+b;
    console.log(add);
}
let x = 2;
let y = 4;
let z = 6;
sum(3,2); 
sum(x,y); 
sum(x,z);

//do not want to print value of function, but return it
function square(x){
    let result = x * x;
    return result; 
}
console.log(square(4));
//or store result in variable
let value = square(-3);
console.log(value); 

//function doing some job and returning some value that we will use later
