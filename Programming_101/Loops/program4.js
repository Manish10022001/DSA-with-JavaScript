//write a function that returns the smallest number in the array
//Explanation: see explaanation of program3, just reverse it to get minimum
function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
let arr = [13, 14, 8, 5, 19, 18, 20, 15, 12];
let result = findSmallest(arr);
console.log(result);
