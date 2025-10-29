// OOPS in javascript

// Prototypes

// let arr = [1, 2, 3, 4, 5];

// arr.sayhello = () => {
//     console.log("Hello world");
// }

// let arr2 = [10, 20, 30, 40, 50];

// Factory Functions

// function PersonMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         greet: function(){
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         },
//     };

//     return person;
// }

// const person1 = PersonMaker("Alice", 30);
// const person2 = PersonMaker("Bob", 25);
// console.log(person1);
// person1.greet();
// console.log(person2);
// person2.greet();    


// Constructor

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function(){
//     console.log(`Hello, my name is ${this.name}.`);
// };

// Classes

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
// let p1 = new Person("Charlie", 28);
// let p2 = new Person("Diana", 22);

// Inheritance

// class Student extends Person{
//     constructor(name, age, marks){
//         super(name, age)
//         this.marks = marks;
//     }
// }

// let stu1 = new Student("Anurag", 20, 90);

// class Teacher extends Person {
//     constructor(name, age, subject){
//         super(name, age);
//         this.subject = subject;
//     }
// }

class Mammel {
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("Mammel is eating.......");
    }
}

class Dog extends Mammel{
    constructor(name){
        super(name);
    }
    bark(){
    console.log("Dog is barking.......");
    }
}
class Cat extends Mammel{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("Cat is meowing.......");
    }
}

let dog1 = new Dog("Buddy");
dog1.eat();
dog1.bark();
let cat1 = new Cat("Whiskers");
cat1.eat();
cat1.meow();