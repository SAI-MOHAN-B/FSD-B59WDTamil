async function foo() {
    try {
        let data = await fetch("https://restcountries.com/v3.1/all");
        let res = await data.json();
        console.log(res);
        for(var  i =0;i<res.length;i++){
          var test = res[i].latlng;
          open_weather(...test);
        }
    }
    catch (error) {
        console.log(error);
    }
}


async function open_weather(lat,lon){
try{
let data_1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`);
let data_2 = await data_1.json();
console.log(data_2.main.temp);
}
catch(error){
console.log(error);
}

}

foo();

Async and Await
working with API's
Yesterday's Task

Async and  await :
it's applicable to functions
Def: Async and await are the syntatic sugar way of writing the Promises
syntax: function foo(){

}

A normal function can be converted into async function by placing the keyword called async

The return type of async function is a Promise


a replacement to .then() is await
await helps us to wait until the promise are getting resolved!!
await is a keyword used with async function


Error-handling:
try-catch:
function bar(){
    return new Promise((resolve,reject)=>reject("This is rejected"))
}

async function foo() {
    try {
       //  let result = await bar();
        let data = await fetch("https://restcountries.com/v3.1/all");
        let res = await data.json();
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
}

foo();
