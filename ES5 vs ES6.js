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


// 1.Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.

function foo(arr,n){
if(n == undefined)
  return arr[0];
if(n<0)
  return [];
return arr.slice(0,n);  
}
console.log(foo([7,0,2,5]));
