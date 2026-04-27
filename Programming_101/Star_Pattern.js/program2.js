/*
Pattern 2: Right-Angled Star Triangle
Print a right-angled triangle of stars with n rows.

Output
*
* *
* * *
* * * *

*/
let n = 4; 
for(let i=0; i<n; i++){
    let row = "";

    for(let j=0; j<=i; j++){ //we can aslo use j<i+1
        row = row+"*";
    }
    console.log(row);
}