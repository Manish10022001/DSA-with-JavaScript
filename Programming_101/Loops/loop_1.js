//Print hello world 20 times
for (let i = 0; i <= 20; i++) {
  console.log("Hello World " + i);
}

for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello world");
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

//we can call function, if else , or anythign inside the loop
function greet() {
  console.log("Hi");
}
for (let i = 0; i < 5; i++) {
  greet();
}


//How array and loop words
let arr = [10,2,3,4,3,5]

let lenght = arr.length; //6
for (let i = 0; i<lenght;i++){
    console.log(arr[i])
}

//Print all even numbers in the array
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}


//While Loop
//1.initialize 2.while(condition){do anything here and increment/decrement}
let i =0;
while(i<5){
    console.log("Hello");
    i++;
}