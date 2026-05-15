/*
Problem Statement: Move Zeroes
Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

Note:You must do this in-place without making a copy of the array.

Examples
Example 1:

Input:nums = [0,1,0,3,12]

Output:[1,3,12,0,0]

Example 2:

Input:nums = [0]

Output:[0]
*/

let moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  //move all zeroes in place of remaining elements
  for (let i = x; i < nums.length; i++) {
    nums[x] = 0;
    x++;
  }
};

let nums = [0, 1, 0, 3, 12,0,0,8,3,3];
moveZeroes(nums);
console.log(nums);
