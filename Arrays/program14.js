/*
Problem Statement: Max Consecutive Ones
Given a binary array nums, return the maximum number of consecutive 1’s in the array.

Examples
Input:nums = [1,1,0,1,1,1]
Output:3
*/

let findMaxConsecutiveOnes = function (num) {
  let currCount = 0;
  let maxCount = 0;

  for (let i = 0; i < num.length; i++) {
    //if element is 1 then increment crr. count
    if(num[i] == 1) {
      currCount++;
    } else {
      maxCount = Math.max(maxCount, currCount);
      currCount = 0; //if encounter element other than 1, need to update max and then change curr. to 0
    }
  }
  return Math.max(maxCount, currCount);
};

let nums = [1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1];
let result = findMaxConsecutiveOnes(nums);
console.log(result);