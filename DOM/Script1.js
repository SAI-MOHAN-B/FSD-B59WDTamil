document.getElementsByClassname("classname");
document.getElementsByTagname("tagname");
document.querySelector(".class/#id/tag");
document.querySelectorAll("");

append vs AppendChild
Addevent Listeners
alertPrompt,confirm
Task 
Assignment

document.getElementsByClassname("classname");
This method retrives the set of elements having the specific classname as mentioned in the method
The return type of this method is a HTMLCollection


document.getElementsByTagname("tagname");
This method retrives the set of elements having the specific tagname as mentioned in the method
The return type of this method is a HTMLCollection


document.querySelector(".class/#id/tag");
it selects the element based on the specific selector,(id,class,tag)
if you wanted to select the first occurence of the HTML element
then we can use the query selector
The return type is of HTML element

document.querySelectorAll(".class/#id/tag");
it selects the element based on the specific selector,(id,class,tag)
if you wanted to select the All occurence of the HTML element
then we can use the query selector
The return type is of Nodelist

append:
Append helps us to append the multiple elements 
The return type will be undefined

AppendChild:
AppendChild helps us to append Only a Single element
The return type will be an Html element

var ele =  document.createElement("p");
ele.innerHTML = "this is p";
var div = document.createElement("div");
var span = document.createElement("span");
span.innerHTML = "this is span";

var res = div.append(ele,span);
console.log(res);
document.body.append(div);

function foo(){
    console.log("Hello guvi!!");
}

var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Clickme";
button.addEventListener("click",foo);

document.body.append(button);

alert:
prompt:

function foo(){
   var res = prompt("Enter your name");
   console.log(res);
   let data = document.createElement("div");
   data.innerHTML = `${res}`;
   document.body.append(data);
}

var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Clickme";
button.addEventListener("click",foo);

document.body.append(button);
