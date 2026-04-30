/*
Pattern: Print a Diamond Star Pattern
Write a program that prints a diamond pattern of height n using stars (*).
The pattern should first increase and then decrease symmetrically.

Output (n = 4)
   *
  ***
 *****
*******
 *****
  ***
   *
*/
//here i will just combine program 9 and program 10, just in program 10, for outer loop i will start from 1 instead of 0 as if used 0 then middle row of stars will repeat 2 times

let n = 4;

for(let i=0; i<n; i++){
    let row = "";
    for(let j=0; j<n-(i+1); j++){
        row += " ";
    }
    for(let k=0; k<i*2+1; k++){
        row += "*";
    }
    console.log(row);
}

for(let l=1; l<n; l++){
    let row = "";
    for(let m=0; m<l; m++){
        row += " ";
    }
    for(let o=0; o<2*(n-l)-1; o++){
        row += "*";
    }
    console.log(row);
}