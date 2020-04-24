// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction can access internal because scope allows a function that's a child of another function access to it's parents variables and methods (but not the other way around).


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let sumation = (num) => {

  let numArr = [];

  for(let i=0; i<num; i++) {

    numArr.push(i+1);

  }

  let counter = numArr.reduce((total, item) => {

    return total + item;

  },0);

  return counter;

}

console.log(sumation(4));