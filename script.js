// XML-HTTP request are used to interact with server via api
// This require 4 steps:

// Create a XHR Object
// XHR:xml-http request
// here XHR represents the XML-HTTP request
var request = new XMLHttpRequest();
// here request is a variable name
// here we are informing to the server that We are using XML-HTTP request


// Step 02: Opening the request
// In this step we are informing the server 
// Which API and Which HTTP method are using
request.open("GET","https://restcountries.com/v3.1/all");


// Step 03: Kickstart a request
// I'm pusing the request from client to server
request.send();


//Step 04: If the status code of the server is 200
// Which means the requested data is in server
// here we will be using the event called Onload

// onload is used when the data has been loaded successfully
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
}