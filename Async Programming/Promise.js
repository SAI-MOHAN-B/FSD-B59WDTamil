callback
promise
fetch 
async and await

Project


Callback Hell
Why Promises??
Promises States
.then and .catch
Promise chaining
Promise.all vs Promise.allSettled


To overcome callback hell scenario we are using the Promises


Promises are used to hold the result of Async Operation
here Promises are treated as Objects

A promise is a Object which Holds the result Of Async Operations
var p1 = new Promise((resolve,reject)=>{})

It has 3 states:
1.pending
2.Fullfilled
3.Rejected

State Diagram

Pending: Initial State
FullFilled: when the async Operation is successfull
Rejected: when The async Operation get's failed

var age = parseInt(prompt("Enter Your Age!!"))
var p1 = new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("You  are Eligible To Vote!!")
    }
    else{
        reject("You are Not Eligible To Vote")
    }
});
console.log(p1);

Promise Handling:

.then ()
 and 
.catch()

.then(): It is used for the resolved state
.catch(): It is used for the rejected state

function bar(){
    return new Promise((resolve,reject)=>setTimeout(()=>reject(["This is a array"]),3000));
}

var p1 = bar();
p1.then((data)=>console.log(data)).catch((error)=>console.log(error))

Advantage Of Promise:
1.Since bar function is returning Promise as a Object 
we can able to store the Promise Object inside the Variable

2. It is used to Create a Multiple dependent Async Operations

function bar(num){
    return new Promise((resolve,reject)=>setTimeout(()=>resolve(`${2*num}`),2000));
}
function foo(){
return new Promise((resolve,reject)=>reject("This is rejected"),3000)
}
bar(5).then((data)=>{
    console.log(data);
    return bar(data);
}).then((data1)=>{
    console.log(data1);
    return foo();
}).then((data2)=>console.log(data2)).catch((error)=>console.log(error))

Multiple Promises Scenario:
Promise.all():
It takes array of Promises
It wil wait Untill All the promises are getting resolved
Syntax:Promise.all(["Promises here"])

Return Type: Array Of Promises


Disadvantage:If any one of the Promises are getting rejected
then the rest of the resolved Promises are not shown here


var p1 = new Promise((resolve,reject)=>{
    if(true){
     setTimeout(()=>setTimeout(()=>resolve("This is resolved p1"),3000))
    }
    else{
    setTimeout(()=>setTimeout(()=>reject("This is rejected p1"),2000))
    }
})

var p2 = new Promise((resolve,reject)=>{
    if(true){
     setTimeout(()=>setTimeout(()=>resolve("This is resolved p2"),4000))
    }
    else{
    setTimeout(()=>setTimeout(()=>reject("This is rejected p2"),1000))
    }
})


var p3 = new Promise((resolve,reject)=>{
    if(false){
     setTimeout(()=>setTimeout(()=>resolve("This is resolved p3"),5000))
    }
    else{
    setTimeout(()=>setTimeout(()=>reject("This is rejected p3"),3000))
    }
})

Promise.all([p2,p1,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error))

To overcome Drwaback of Promise.all
we have Promise.allSettled()
it shows both resolved as well as the rejected state
