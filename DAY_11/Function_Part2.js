// This Keyword

const student = {
    firstName: "Anurag",
    city: "Padampur",
    eng: 90,
    math: 88,
    phy: 80,
    getAvg(){
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.firstName} got ${avg}% `);
    }
};

student.getAvg();

// Exception Handling in JS

console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
}
catch(err){
    console.log("Variable is not defined.");
    console.log(err);
}       
console.log("hello");
console.log("hello");
console.log("hello");

// Arrow Functions

const sum = (a, b) => {
    return a+b;
}
console.log("Sum is", sum(5, 15));

const cube = n =>{
    return n*n*n;
}
console.log("Cube is", cube(5));

const hello = () => {
    console.log("Hello, Duniya!");
}
hello();

// Implicit Return in Arrow Functions

// const mul = (a, b) => ( a*b );   // ; is not neccessary. (for functions)

// OR

const mul = (a, b) => a*b;

console.log(mul(5,5));

// setTimeout() function

console.log("Hi, There!");

setTimeout( () => {                 // Syntax -->  setTimeout(function, timeout);
    console.log("Radhe Radhe Devs");
    }, 2000);
console.log("Welcome to World of Creativity");

// setInterval() function 

let id = setInterval( () => {
    console.log("Radhe Radhe");
}, 3000);

clearInterval(id);      // nothing will print on the console because we cleared the interval.

// this with Arrow Functions

const student1 = {
    firstname: "Anurag",
    marks: 95,
    prop: this,
    getName: function(){    // Normal function
        console.log(this);
        return this.firstname;
    },
    getMarks: () => {     // Parent's Scope  --> window
        console.log(this);
        return this.marks;
    },
    getInfo1: function() {
        setTimeout( () => {
            console.log(this);   // student
        }, 2000);
    },
    getInfo2: function(){
        setTimeout( function(){
            console.log(this);      // window
        }, 2000);
    }
};

// Practice Question
// q1
const square = n => n*n;

console.log(square(10));

// q2
let id3 = setInterval( () =>{
    console.log("Hello, World!");
}, 2000);

setTimeout( () => {
    console.log(clearInterval(id3));
    console.log("Clear Interval Ran");
}, 10000);