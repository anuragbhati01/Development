console.log("Hello Brother!");

// Template Literals

let pencilPrice = 10;
let erasorPrice = 5;
let output = `The Total Price is : ${pencilPrice+erasorPrice} Ruppees.`;
// console.log("The Total Price is : " + (pencilPrice + erasorPrice) + " Ruppees.")     // This is without using literals
console.log(output);

// Conditional Statements

// 1. if Statement
// console.log("before if statement");
// let age = 24;
// if(age >= 18){
//     console.log("You Can Vote Bhai!!");
// }
// console.log("after if statement");

// let firstName = "Harsh";
// if (firstName == "Harsh"){
//     console.log(`Welcome ${firstName} Bhai!`)
// }

// // Question
// let color = "red";
// if(color === "red") {
//     console.log("Stop! Light Color is Red.")
// }
// if(color ==="green") {
//     console.log("Go! Light color is Green.");
// }
// if(color ==="yellow"){
//     console.log("Wait!, Light color is Yellow.");
// }

// 2. else if statements

// let marks = 55;
// if(marks >=90){
//     console.log("A+");
// }
// else if(marks >= 80){
//     console.log("A");
// }
// else if(marks >= 70){
//     console.log("B");
// }
// else if(marks >=60){
//     console.log("C");
// }
// else if(marks <60){
//     console.log("Fail");
// }

// 3. if with else statement

// let age = 14;
// if(age >= 18){
//     console.log("You can Vote!");
// }
// else {
//     console.log("You Can't Vote!");
// }

// Question 2

// let sizeofPopcorn = "xl";

// if(sizeofPopcorn === "xl"){
//     console.log("The Price is 250.");
// }
// else if(sizeofPopcorn === "l"){
//     console.log("The Price is 200.");
// }
// else if(sizeofPopcorn === "m"){
//     console.log("The Price is 100.");
// }
// else{
//     console.log("The Price is 50.");
// }

// 4. Nested if-else

// let marks = 89;

// if(marks >= 33){
//     console.log("Pass");
//     if(marks >= 90){
//         console.log("O");
//     }
//     else if (marks >= 80){
//         console.log("A+");
//     }
//     else {
//         console.log("A");
//     }
// }
// else{
//     console.log("Fail");
// }

// Logical Operators

// Questions
// let strGood = "Aman";
// if(strGood[0]==="A" && strGood.length > 3){
//     console.log("Good String");
// }
// else{
//     console.log("Not a Good String");
// }

// Switch Statement

// let color = "red";

// switch(color){
//     case "red" :
//         console.log("Stop!");
//         break;
//     case "yellow" :
//         console.log("Wait!");
//         break;
//     case "green" :
//         console.log("Go!");
//         break;
//     default :
//         console.log("Broken Light ");
// }

// question 2

// let day = 10;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default :
//         console.log("Wrong Day Entered!")
// }


// Alerts and Prompts

// Alert
// alert("Something went Wrong!");

// console.log("This is a Simple Message");
// console.error("This is Error Message");
// console.warn("This is Warning Message");

// // Prompt
// let firstName = prompt("Enter your name");
// console.log(firstName);

let firstName = prompt("Enter first name");
let lastName = prompt("Enter last name");
let msg = `Welcome ${firstName} ${lastName} !`;
alert(msg);