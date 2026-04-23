//write a function that returns the largest number in the array

//first initialize largest variable and initialize it to 0 or -1, so each numbers is larger than it
//then iterate through the loop, if array element is greater than the largest then update the largest value;
//after loops is complete return the largest number
function findLargest(arr) {
  // Assume the largest element is at negative infinity
  let largest = -Infinity; // if we give 0 or -1, if there is negative number in array then our condition becomes false, so we have to give least number, in js so we use -Infinity, or we can also compare with first array element i.e arr[i]

  for (let i = 0; i < arr.length; i++) {
    // Check if current element is larger than the current largest element
    if (arr[i] > largest) {
      // If found, update largest element
      largest = arr[i];
    }
  }
  // Return the largest element
  return largest;
}
let arr = [3, 4, 8, 5, 19, 18, 20, 15, 12];
let result = findLargest(arr);
console.log(result);
