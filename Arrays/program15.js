/*
Problem: Missing Number
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.
    
Example 2:
Input: nums = [0,1]
Output: 2
Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
2 is the missing number in the range since it does not appear in nums.
*/
//Approach 1: Brute Force with sorting and comparison
function missingNumber(nums){
  //first sort the array
  nums.sort((a,b)=>a-b); 
  
  //after sorting if first element is not 0 then missing number is 0
  if(nums[0] !== 0) return 0;
  
  //loop through each element from index 1, and see if if next numbers is increment of previous or not
  for(let i=1; i<nums.length; i++){
    if(nums[i] !== nums[i-1] + 1){// (num[1] !== nums[1-1]+1) -> 1 !== nums[0]+1-> 1!== 0+1=1;
      return nums[i-1] +1;
    }
    
  }
  return nums.length; //return lenght, if [0,1] no missing number so we assing next number is missing in this case 2( which is equla to [0,1].length)
  
}
let num = [0,1,4,3,5];
let result = missingNumber(num);
console.log(result);
