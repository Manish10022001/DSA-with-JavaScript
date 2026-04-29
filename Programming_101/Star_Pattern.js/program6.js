/*
Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars
Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.

Output
      *
    * *
  * * *
* * * *
Approach:
● Outer loop (Rows): Loopi = 0from0ton-1.Each iteration is a new row.
● Inner loop 1(Spaces):For each row, addn - i - 1spaces before the stars to right-align the triangle.
● Inner loop 2(Stars):Addi+1stars after the spaces.
● Print Row: Combine the spaces and stars, then print the row.
*/

let n = 4;
for(let i=0; i<n; i++){
  let row = '';

  //loop for spaces
  for(let j=0; j<n-(i+1); j++){
    row = row + " ";
  }

  //loot for stars
  for(let k=0; k<i+1; k++){
    row = row + "*"
  }

  console.log(row);
}