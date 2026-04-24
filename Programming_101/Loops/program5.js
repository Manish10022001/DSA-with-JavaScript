//Find the second largest number in the array
//COrner CAses:
// 1. IS ARRAY EMPTY
// 2.ARRAY HAS NEGATIVE VALUES
// 3. ARRAY HAS DUPLICATE VALUES

function secondLargest(arr) {
  //1.Corner case: if array is empty;
  if (arr.length < 2) {
    return "Array has have atleat 2 elements";
  }
  let first_largest = -Infinity;
  let second_largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first_largest) {
      second_largest = first_largest;
      first_largest = arr[i];
    } else if (arr[i] > second_largest && arr[i] !== first_largest) {
      second_largest = arr[i];
    }
  }
  //return second_largest;   this works but if all elements are some so there will be no second largest so below condition
  return second_largest === -Infinity //used -Infity as it is the smallest values possible and also it is assinged to second_largest at top
    ? "No second Largest Found"
    : second_largest;
}

let arr = [2, -1, 12, -5, 8, 12, 0, 10]; //2. corner case works as well

let result = secondLargest(arr);
console.log(result);
