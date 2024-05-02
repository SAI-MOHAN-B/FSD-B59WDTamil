// MRF methods:
// Usage on the API's 
// for-of, for each , for loop for Objects

// MRF methods are applicable only to arrays

// M: map 
var arr = [12,13,14,15];
// var res = [24,26,28,30];
// step 01: take a  temp array
// Step 02: Apply for loop
// Step 03: In every Iteration, Multiply each element by 2 and put 
// it into the temp array
// Step 04: Print the temp array

// map is applicable to array
// map takes function as a parameter
// apply the function on each and every element of the array
// returns a new array
// Syntax: arrayname.map((ele)=>{});
// here ele is not inbuilt word
// it represents the array elements

var res = arr.map((ele)=>ele*2);
console.log(res);

// This logic is for Guvi IDE
var data = "1 2 3 4".split(" ");
console.log(data);
var data_res = data.map(Number);
console.log(data_res);

// MRF methods:
// Usage on the API's 
// for-of, for each , for loop for Objects

// MRF methods are applicable only to arrays

// M: map 
var arr = [12,13,14,15];
// var res = [13,15];
// step 01: take a  temp array
// Step 02: Apply for loop
// Step 03: take each element of the array and the apply the condition
// Step 04: if the element is even skip the element
// Step 05: if the element is Odd then push that element to the temp array
// Step 06: print the temp array

// Filter:
// filter takes  function as a parameter
// inside the function we have the condition
// if the condition is true, it will push the array element 
// to the resultant array
// if the condition is false then it won't be pushed
// the return type will be an array
var res = arr.filter((ele)=>ele%2!=0);
console.log(res);
