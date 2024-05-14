// var label =  document.createElement("label");
// label.setAttribute("for","email");
// label.innerHTML = "Email";
// var email_break = document.createElement("br")
// var input_email = document.createElement("input");
// input_email.setAttribute("type","email");
// input_email.setAttribute("id","email");

// document.body.append(label,email_break,input_email);




function label_create(tagname,attrname,attrvalue,content){
var label_ele = document.createElement(tagname);
label_ele.setAttribute(attrname,attrvalue);
label_ele.innerHTML = content;
return label_ele
}
// <label for="email">Email</label>
// label_create("label","for","email","Email");
function break_create(){
var break_create = document.createElement("br");
return break_create;
}
function input_create(inputtag,attrname,attrval,attrname1,attrval1){
var input_ele = document.createElement(inputtag);
input_ele.setAttribute(attrname,attrval);
input_ele.setAttribute(attrname1,attrval1);
return input_ele;
}

function foo() {
    var res = document.getElementById("email").value;
    console.log(res);
}
// <input type="email" id="email">
// input_create("input","type","email","id","email")

var email = label_create("label","for","email","Email");
var email_break = break_create();
var input_email = input_create("input","type","email","id","email");
var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","foo()");
button.innerHTML = "Click me"
document.body.append(email,email_break,input_email,button)
