// write a function that searches for an element in an Arrayand return the indexedDB, if the element is not
// present then just return -1;

function searchElement(arr, x) {
  //Todo
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  //if element not found after the loop is over then we just return -1 outside the loop
  return -1;
}
let arr = [2, 4, 0, 10, 8, 30];
let result = searchElement(arr, 49);
console.log(result);
//searchElement(arr,4) => 0;
//searchElement(arr,10)=>3
//searchElement(arr,49) => -1
