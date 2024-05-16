var parent_div = document.createElement("div");
parent_div.className = "main"

var input_date = document.createElement("input");
input_date.setAttribute("type","date");
input_date.setAttribute("id","dob");

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML = "Click me";
button.addEventListener("click",display_date);
parent_div.append(input_date,button);
document.body.append(parent_div)


function display_date(){
    var input = document.getElementById("dob").value;
    var inputdate = new Date(input);
    var currentdate =  new Date();
    console.log(`Input date :${inputdate}, Current date:${currentdate}`);
    var millisecdiff = parseInt(currentdate.getTime()) - parseInt(inputdate.getTime())
    console.log(millisecdiff);
    var secondsdiff = Math.floor(millisecdiff/1000);
    console.log(secondsdiff);
    var mindiff = Math.floor(secondsdiff/60);
    console.log(mindiff);
    var hoursdiff = Math.floor(mindiff/60);
    console.log(hoursdiff);
    var daydiff = Math.floor(hoursdiff/24);
    console.log(daydiff);
    var yeardiff = currentdate.getFullYear() - inputdate.getFullYear()
    console.log(yeardiff);
    var monthdiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(monthdiff);

}
