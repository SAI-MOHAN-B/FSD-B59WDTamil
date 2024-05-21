var arr =[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
var obj = {};
var min_occ = 1
var element;
for(var i =0;i<arr.length;i++){
var ele = arr[i];
if(obj[ele]){
obj[ele]++;
}
else{
obj[ele] = 1;
}
if(obj[ele] > min_occ){
min_occ = obj[ele];
element = ele;
}
}
console.log(`Element ${element} occurs ${min_occ} times `);
