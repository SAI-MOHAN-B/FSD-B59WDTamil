function foo(name,cb){
console.log(`Hi my name is ${name}`);
cb();
}

function bar(){
    console.log(`I am a guvi geek mentor`);
}
foo("John",bar)
