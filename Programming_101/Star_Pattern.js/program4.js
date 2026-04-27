/*
Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
Write a program that prints a right-angled triangle where each row contains the same number repeated.

Output
1
2 2
3 3 3
4 4 4 4

Approach:
● Outer loop (Rows): Loop from i = 0to i < n.
● Inner loop (Numbers):Loop fromj = 0to j <= i, appending i+1as a string.
● Build and Print: Build the row string and print it.
*/

let n=4;
for(let i=0; i<n; i++){
    let row="";
    for(let j=0; j<=i; j++){
        row = row + (i+1); //used i as we want repeated number, i.e same number in whole row
    }
    console.log(row);
}