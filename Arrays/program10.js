/*
Problem Statement:
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.
*/

let reverseString = function (s) {

  let n = s.length; //to get length of array
  let half = Math.floor(n / 2);

  //   for (let i = 0; i < n / 2; i++) {
  for (let i = 0; i < half; i++) {
    //swap [i, n-1-i]
    let temp = s[i]; //use variable to store the value of a to later use to replace
    s[i] = s[n - 1 - i];
    s[n - 1 - i] = temp;
  }
};
let num = ["a", "d", "d", "i", "p"];
reverseString(num);
console.log(num);
