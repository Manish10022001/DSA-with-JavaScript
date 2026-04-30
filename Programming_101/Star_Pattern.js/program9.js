/*
Pattern 1: Print a Centered Star Pyramid
Write a program that prints a centered pyramid pattern of height n using stars (*).

Output (n = 4)
   *
  ***
 *****
*******
*/

let n=4; 
for(let i=0; i<n; i++){
    let row="";

    for(let j=0; j<n-i+1; j++){
        row = row+" ";
    }
    
    for(let k=0; k<i*2+1; k++){
        row = row + "*"
    }
    console.log(row)
}