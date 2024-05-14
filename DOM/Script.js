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


// For Table Creation
function create_tr(){
    var tr_ele = document.createElement("tr");
    return tr_ele;
}

function create_th(tagname,classname,value,content){
var th_ele = document.createElement(tagname);
th_ele.setAttribute(classname,value);
th_ele.innerHTML = content;
return th_ele; 
}


function create_td(tagname,content){
    var td_ele = document.createElement(tagname);
    td_ele.innerHTML = content;
    return td_ele; 
}
var table = document.createElement("table");
table.className = "table";

var thead = document.createElement("thead");
thead.className = "thead-dark";

var tbody =  document.createElement("tbody");

var thead_tr = create_tr();
var th1 = create_th("th","scope","col","#");
var th2 = create_th("th","scope","col","firstname");
var th3 = create_th("th","scope","col","lastname");
var th4 = create_th("th","scope","col","handle");

thead_tr.append(th1,th2,th3,th4);
thead.append(thead_tr);

var tbody_tr = create_tr();
var td1 = create_th("th","scope","row","1");
var td2 = create_td("td","mark");
var td3 = create_td("td","otto");
var td4 = create_td("td","@md");

tbody_tr.append(td1,td2,td3,td4);
tbody.append(tbody_tr);


table.append(thead,tbody);
document.body.append(table);

