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

//Method 1;
let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1); //used i as we want repeated number, i.e same number in whole row
  }
  console.log(row);
}

//Method 2: instead of initializing i to 0, we can initialize it to 1 so that we do not need to add +1 in the inner loop
for (let i = 1; i <= n; i++) {
  //<=n because i is 1, not zero so we do not need n-1;
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}
