//create a function which accepts the age and tells whether a person is eligible to vote or not

function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid Input");
  } else if (age < 18) {
    console.log("Not Eligible to Vote");
  } else {
    console.log("Eligible to Vote");
  }
}
eligibleToVote(3);
eligibleToVote(32);
eligibleToVote(-1);

//Create a function to check if a number is Even or Odd
function isEvenOrOdd(num){
    let rem = num%2;
    if(rem == 0){
        console.log("Even");
    } else{
        console.log("Odd")
    }
}
isEvenOrOdd(33);
isEvenOrOdd(12);
isEvenOrOdd(-12);