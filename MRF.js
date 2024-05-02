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

// reduce
// reduce is applicable to arrays
// it is useful when you need to take the sum of array elements.
var arr = [11,12,13,14,15];
// syntax: arrayname.reduce((acc,cv)=>acc+cv,0);
// accumulator:initial value
var res = arr.reduce((acc,cv)=>acc+cv,0);
console.log(res);


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);
// Print the details of those countries which belongs to Europe region
var details_europe = res.filter((ele)=>ele.region == "Europe");
console.log(details_europe);

// Print the Country names, whose region belongs to Asia
var details_asia = res.filter((ele)=>ele.region == "Asia");
console.log(details_asia); 
var details_data = details_asia.map((ele)=>ele.name.common);
console.log(details_data);


//Print the country name as well as capital of those countries who's population is greater than 1,00000
var data_popu = res.filter((ele)=>ele.population>100000);
console.log(data_popu);
for(var i =0;i<data_popu.length;i++){
    console.log(`Country name:${data_popu[i].name.common} Capital: ${data_popu[i].capital}`);
}
}
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

var res = Object.keys(object1)
for(var i =0;i<res.length;i++){
  console.log(object1[res[i]]);
}
// for-of
for(var element of res){
  console.log(object1[element]);
}
// for-each
res.forEach((ele)=>console.log(object1[ele]));
