/*
Problem Statement:
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.
*/

let reverseString = function (s) {
  for (let i = 0; i < n / 2; i++) {
    let temp = s[i];
    s[i] = s[n - 1 - i];
    s[n - 1 - i] = temp;
  }
};
let num= ['a','d','d','i','p'];
let result = reverseString(num);
console.log(result);
