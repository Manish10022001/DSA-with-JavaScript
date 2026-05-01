/*
Problem: Given an integer x, returns true if x is a palindrome, and false otherwise.
Example1: Input x =121
            Output: true;
            Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:  Input x = -121
            Output: false;
            Explanation: From left to right, it reads -121, from right to left, it becomes 121-. Therefore it is not palindrome.

Example 3:  Input x = 10;
            Output: false;
            Explanation: Reads 01 from right to left. Therefore it is not a palindrome
*/

/*to get the palindrom, we need to get the last number and then remove the last number and store it in another variable
so , n%10 -> gives us the last digit i.e the remainder.
     n/10 -> Removes the last digit from the number,

     so we get the last digit and add that in the revesre variable.
*/

function isPalindrome(n) {
  let num = n; //storing n in num variable so when we compare rev with n(number), it give original number not the updated one i.e 0
  let rev = 0; //initial value;

  while (num > 0) {
    //first get the remainder i.e last digit
    let rem = num % 10;

    //store this in the rev variable;
    //used 10*rev, because we need to place numbers one after another, not add them
    rev = 10 * rev + rem; //eg. num 121, rem = 1; rev=> 10*0 + 1 = 1, rem=2; rev=> 10*1 + 2 = 10+2=12, rem=>1; rev=>10*12 + 1 = 120 + 1 = 121;
    num = Math.floor(num / 10);
  }
  //   return rev;

  if (rev === n) {
    return true;
  } else {
    return false;
  }
}

let number = 101;
console.log(isPalindrome(number));
