/*
Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

Output
1
1 0
1 0 1
1 0 1 0

*/
let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1; //use this to switch 1 and 0

  for (let j = 0; j <= i; j++) {
    row = row + toggle;

    //to switch the toggle, as we can see after each colomn, 1 and 0 are changing so used this logic
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
