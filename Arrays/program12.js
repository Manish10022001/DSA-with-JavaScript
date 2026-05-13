/*
Problem Statement: Merge Sorted Arrays
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Mergenums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/
//Approach 3: Optimal Approach: without extra space
let merge = function(num1, m, num2, n){
  let p1 = m-1;
  let p2 = n-1;
  
  for(let i=m+n-1; i>=0; i--){
    if(p2<0) break;
    if(num1[p1] > num2[p2] &&  p1>=0){
      num1[i] = num1[p1];
      p1--;
    } else{
      num1[i] = num2[p2];
      p2--;
    }
  }
}
let num1 = [1,2,3];
let num2 = [2,4,8];

merge(num1,3,num2,3)
console.log(num1);

//Approach 2: Using two pointers
/*let merge = function (num1, m, num2, n) {
  let nCopy = num1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    // 
    //  Take element from nCopy if:
    //   1. nCopy still has remaining elements
    //   AND
    //   2. Either:
    //      - current nCopy element is smaller
    //      OR
    //      - all num2 elements are already used
    if ((p1 < m && nCopy[p1] <= num2[p2]) || p2 >= n) {
      num1[i] = nCopy[p1];
      p1++;
    } else {
      num1[i] = num2[p2];
      p2++;
    }
  }
};
let num1 = [1, 2, 3, 0, 0, 0];
let num2 = [2, 4, 5];
merge(num1, 3, num2, 3);
console.log(num1);
*/


//Approach 1: Brute Force
/*
let merge = function(num1, m, num2, n){
    //merge m2 into m1, so start from index m, num1.lenght = 6, so we need till index 5,
    for(let i = m ; i<num1.length; i++){
        
        num1[i] = num2[i-m]; //i is 3 and m is also 3 so 3-3=0, num2[0], is placed in num1[3]
    }
    num1.sort((a,b)=>a-b); //this compares both values eg. negative → keep order , positive → swap order, zero → equal, so this takes 2 numbers form modified num1 array (b-a) for descending(a-b means a>b)
} //If a - b < 0 → a comes before b ,If a - b > 0 → a comes after b, If a - b = 0 → a and b are equal, keep order
let num1 = [1,2,3,0,0,0];
let num2 = [2,4,5];
merge(num1,3, num2,3);
console.log(num1);
*/
