console.log("Hello World");
console.log(23);
console.log(true);

//Create Variables
//1. const
const a = 10;
const b = 20;
const sum = a + b;
const multiply = a * b;
const difference = a - b;
console.log(sum, multiply, difference);
//if declared const we cannot change it later

//let: we ccan later on change the value
let x = 20;
console.log(x);

//String
let firstName = "Manish";
let lastName = "Shirsat";
let fullName = firstName + " " + lastName;
console.log(fullName);

//Arrays
let arr = [2, 4, 53, 200, 20, 40, 4]; //if used [] means it is list
let arrSum = arr[2] + arr[4];
console.log(arrSum);

let arrString = ["manish", "ajinkya", "leo"]; //array of string
console.log(arrString[2]);

let arrMixedArr = ["manish", 3, 2, false, [4, 3]]; //array can have another arraay as well
console.log(arrMixedArr[4][1]);

//Objects created using {key:value}
let obj = {
  a: 8,
  firstName: "Manish",
  lastName: "Shirsat",
  bool: true,
  arr: [2, 9, 3],
};
console.log(obj.arr[1]);
console.log(obj.firstName + obj.lastName);
