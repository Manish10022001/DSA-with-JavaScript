
/*Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

Output                      i   j        n=4
1 2 3 4    //runs 4 tims    0   4 times  n-i = 4-0 = 4
1 2 3      //runs 3 times   1   3 times  n-i = 4-1 = 3
1 2        //runs 2 times   2   2 times  n-i = 4-2 = 2
1          //runs 1 time    3   1 time   n-i = 4-1 = 1 so in inner loop used n-i
Approach:
● Outer loop (Rows): Loopifrom0 to n - 1.Each iteration represents a row.
● Inner loop (Print Numbers):For each row, loopjfrom0to n-i-1 and append j+1to a row string.
● Print Row: After the inner loop, print the row string.

*/
let n=4;
for(let i=0; i<n; i++){
    let row = "";
    for(let j=0; j<n-i; j++){//n-i as  us can see in output
        row = row + (j+1);
    }
    console.log(row);
}