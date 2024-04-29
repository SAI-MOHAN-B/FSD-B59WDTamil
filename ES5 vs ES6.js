// var let and const
// Hositing
// es5 vs es6
// Spread and rest parmeter
// template literals
// problem solving questions

// Hositing
// it is a process where you are trying to accessing the variable before 
// declaration


// let and const
// they are block scoped!!

var arr = [12,13,14];
// Spread Operator:  ...
// Expanding the arrays
console.log(arr);
console.log(...arr);

function foo(a,b,c){
  return a+b+c;
}
console.log(foo(...arr));

// Combining The arrays
function foo(a,b,c,d,e,f,...rest){
  console.log(rest);
return a+b+c+d+e+f
}
console.log(foo(12,13,14,15,16,17,18,19,20));
// rest paramater
// it returns the array
// it stores the remaining elements

const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
console.log(``);
