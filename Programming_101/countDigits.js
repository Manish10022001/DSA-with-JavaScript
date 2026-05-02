/*
Problem Statement: Count the Number of Digits in an Integer
Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

Requirements:
Handles both positive and negative integers.
Return 1 if n is 0(since 0 is a single-digit number).
*/

//to get the digits i keep dividing the number by 10, until the number is 0, and ignore the decimal poinst as well
function countDigits(n){
    let count =0; 
    n = Math.abs(n); //converts negative to positive

    while(n>0){
        n = Math.floor(n/10); //used Math.floor to ignore the decimal other wise it considers decimal numbers as well
        count++;
    }
    return count;
}
let num = -1233;
let result = countDigits(num);
console.log(result);