// Write a function that returns the number of negative numbers in an Array

// explanation:
// first transvers through the Array, if there is -ve number then increate the counter
function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

let arr = [2, -9, 17, 0, -1, -10, -4, 8];
let result = countNegatives(arr);
console.log(result);
//countNegatives(arr);/3;
