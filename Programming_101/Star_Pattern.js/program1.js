//Pattern: Print nxn Star Square
//Print a square patter of stars(*) of size n x n;.

/* Output:

* * * *
* * * * 
* * * *
* * * *

*/
//1. initialze n;
let n =4; 

//outer loop 
for(let i=0; i<n; i++){
    //create a variable and initialize to empty string
    let row = "";

    //Inner Loop
    for(let j=0; j<n; j++){
        //we append the star in the row in each loop iteration
        row = row + "*";//on each loop star will be stored in the row
    }
    //after inner loop, print complete row string
    console.log(row);
}