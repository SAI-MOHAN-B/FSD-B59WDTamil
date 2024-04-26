// Code reusability
function foo(){

}
// here foo is user defined..
// here foo is a functionname

// return keyword
// To take the result outside of the functions


function mul(a,b){
return a*b;
}
console.log(mul(12,13));
console.log(mul(15,17));
console.log(mul(45,65));
// DRY



// How to pass an array to functions
function arr_data(arr){
return arr;
}
var res = [12,13,14,15]
console.log(arr_data(res));


// How to pass the Objects to functions
function object_data(obj){
return obj;
}
console.log(object_data({name:"guvi",age:23}));


// The above functions are also called as Normal functions / Generic Functions
// Types of Functions:
// Anonymous
// Arrow 
// IIFE functions

// Anonymous functions:
// Syntax: var variable_name = function(){}
// here we are storing the function inside the variable
var mul =  function(res){
return res;
}
console.log(mul("hello"));
