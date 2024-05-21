Application of Promise
Fetch 
Task On rest Countries


What is Fetch:
It is an Alternative To XML-HTTP request
Syntax: fetch("API-URL")
fetch takes api url as the parameter
Returns the Promise Object

Inside the Promise Object we have the data which is of type readable stream
Readable Stream: Packets of data


To convert readable stream into objects we use .json() method
Again this method Returns a Promise:

var res =  fetch("https://restcountries.com/v3.1/all");
res.then((data)=>{
    return data.json()
}).then((data1)=>console.log(data1)).catch((error)=>console.log(error))

Optional Parameters:
POST operation using fetch:
method,headers,body

Need of server:
var res =  fetch("https://664c9fc235bbda1098812cad.mockapi.io/data/Users/26",{
   method:"PUT",
   body:JSON.stringify({
    name:"FSDB59WDTamil",
    body:"foo",
    id:122
}),
   headers:{
    "Content-type":"application/json; charset=UTF-8"
   }
})
res.then((data)=>{
    return data.json()
}).then((data1)=>console.log(data1)).catch((error)=>console.log(error))


//POST:
var res =  fetch("https://664c9fc235bbda1098812cad.mockapi.io/data/Users",{
   method:"POST",
   body:JSON.stringify({
    name:"FSDB59WDTamil",
    body:"foo",
    id:122
}),
   headers:{
    "Content-type":"application/json; charset=UTF-8"
   }
})
res.then((data)=>{
    return data.json()
}).then((data1)=>console.log(data1)).catch((error)=>console.log(error))


// Rest Countries
var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
res.then((data) => {
    return data.json()
}).then((data1) => foo(data1)).catch((error) => console.log(error))

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";


function foo(data1) {
    console.log(data1);
    for (var i = 0; i < data1.length; i++) {
        var col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Rest Countries Data</div>
    <div class="card-body text-primary">
      <h5 class="card-title">${data1[i].name}</h5>
      <p class="card-text">Capital:${data1[i].capital}</p>
      <p class="card-text">Region:${data1[i].region}</p>
    </div>`;
    row.append(col);
    container.append(row);
    document.body.append(container);
    }
    
}
