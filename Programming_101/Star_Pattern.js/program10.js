/*
Pattern 2: Print an Inverted Star Pyramid
Write a program that prints an upside-down centered pyramid pattern of height n using stars (*).

Output (n = 4)
*******
 *****
  ***
   *
*/
let n=4; 
for(let i=0; i<n; i++){
    let row = "";

    for(let j=0; j<i; j++){
        row = row+" ";
    }
    for(let k=0; k<2*(n-i)-1; k++){
        row = row+"*";
    }
    console.log(row);
}