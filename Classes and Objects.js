// Class and Objects
// In javascripts

// OOP
// Abstraction, Encapsulation,Inheritance and Polymorphism

// Abstraction: hiding the implementation details from the user
// Encapsulation:format specifiers
// Inheritance: parent to children
// Polymorphism:


// class ??
// A class is a Collections of Properties,Methods, etc
// Syntax: class Classname{
// }
// here classname is user defined..


// Objects:
// An real time entity
class Car{
constructor(color,brand){
this.color = color;
this.brand = brand;
}
}

// Objects:
var c1 = new Car("blue","audi");
console.log(c1);
console.log(c1.color);
console.log(c1.brand);
c1.unit = "bangalore";
console.log(c1);

// new is a Inbuilt Keyword
// It will create the fresh Object
// But these are specific Objects...

// var obj = {}

//to store the value inside the Object we need constructors
// Constructors are the special way of Assigning values to the Objects
