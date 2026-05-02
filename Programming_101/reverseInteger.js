/*Reverse Integer:
Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.

Requirements
Reverse the digits of a 32-bit signed integer.
Return 0 if the result overflows.
*/

function reverseInteger(n) {
  let rev = 0;
  let xCode = n; //3. created and stored n to compare
  n = Math.abs(n); // to convert -ve to +ve;
  //1
  while (n > 0) {
    let last = n % 10; //to get the last digit
    rev = 10 * rev + last;
    n = Math.floor(n / 10);
  }

  //2
  /* this also works
  let limit = Math.pow(2, 31);
  if (rev > limit) {
    return 0;
  }
  //or 
  */
  if(rev > 2**31) return 0;

  //3. to manage negative numbers; if original number less that 0, then -reverse will print
  return (xCode < 0) ? -rev : rev;
}
let num = -234;
let result = reverseInteger(num);
console.log(result);

/*
1.to get reverseInteger use same logic as palindrome to reverse the number, 
then to get the limit range to manage the overflow, use condition , get limit by Math.pow(2,31) or directly compare with 2**31;
*/