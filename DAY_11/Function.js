// Functions in JavaScript

// Creating Function
function greetings(){
    console.log("Radhe Radhe Ji!");
}

// Calling Function

greetings();

// Practice Question 1
function printPoem(){
    console.log("Twinkle Twinkle little star");
    console.log("how I wonder what you are");
}
printPoem();

// Practice Question 2

function throwDice(){
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}
throwDice();

// Functions with Argument

function printName(name){
    console.log(name);
}
printName("Anurag");

function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("Ankit", 20);

function sum(a, b){
    console.log(`The Sum of two no. is ${a+b}`);
}
sum(5, 8);

// Practice question Part 2

function average(a, b, c){
    console.log(`The Average of given numbers is : ${(a+b+c)/3}`);
}
average(89, 45, 88);

// function printTable(n){
//     console.log("Table of", n);
//     for(let i=1; i<=10; i++){
//         console.log(`${n} * ${i} = ${n * i}`);
//     }
// }
// let n = prompt("Which Table you want");
// printTable(n);

// Function with return keyword

function add(a, b){
    return a+b;
}
console.log("Sum of 2 no. :", add(5,7));
console.log("Sum of 3 no. :", add(add(5, 5), 5));

function isAdult(age){
    if(age>=18){
        return "Adult";
    }
    else{
        return "Teenager";
    }
}
console.log(isAdult(18));

// Return Sun of no. from 1 to n

function getSum(n){
    let add = 0;
    for(let i=1; i<=n; i++){
        add = add + i;
    }
    return add;
}

console.log(getSum(5));

// Function to Concat all Strings in an array

function concat(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result = result + str[i];
    }
    return result;
}

let str = ["hi", "hello", "bye", "thankyou"];
console.log(concat(str));    // hihellobyethankyou


// Function Scopes

let num1 = 66;  // Global Scope

function subtract(a, b){
    console.log(a-b);   // Function Scope
}

subtract(15, 4);
console.log(num1);

// lexical Scope
console.log("--------------");
function outerFunc(){
    let x = 19;
    let y = 83;
    function innerFunc(){
        console.log(x);   // lexical Scope
    }
    innerFunc();
}

outerFunc();

// Practice question
console.log("----------------");



let greet = "hello";    // Global Scope

function changeGreet(){ // Funciton Scope
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);  // Lexical scope
    }
    innerGreet();
}

console.log(greet);
changeGreet();


// NameLess function

let multipy = function(a, b){
    return a*b;
}
console.log(multipy(5, 5));

// Higher Order Functions

function multipleGreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}
let namaste = function(){
    console.log("Radhe Radhe");
}

multipleGreet(namaste, 2);


// Higher Order Function (Return function)

function oddOrEvenFactory(request){
    console.log(`Request is ${request}`);
    if(request == "odd"){
       return function(n) {
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("Wrong Request");
    }
}

let fun = oddOrEvenFactory("odd");   // odd, even or any request
fun(6);   // request is seted to odd  

console.log("-----------");
// Methods

const calculator = {
    num : 55,
    add : function(a, b){
        return a+b;
    },
    sub : function(a, b){
        return a-b;
    },
    mul : function(a, b){
        return a * b;
    },
    division(a, b){
        return a / b;           // Shorthand Method to create function in the object
    }
};

console.log(calculator);
console.log(calculator.num);
console.log(calculator.add(5,4));
console.log(calculator.sub(80, 34));
console.log(calculator.mul(5, 5));
console.log(calculator.division(15, 3));
