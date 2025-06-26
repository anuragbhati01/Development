// Arrays are the Linear Data Sturctures which are contigously stored in the Memory.

let students = ["harsh","ansh","ankit"];

console.log(students[2]);

let arr1 = ["anurag", 5, 6.7];
// Array Methods

let cars = ["Audi","BMW","Mustang","Porsche"];

console.log(cars);
cars.push("Range Rover");   // Adds the element in the array in the end and returns the length.
cars.push("BMW Series 6");

console.log(cars);

console.log(cars.pop());  // Deletes the last element from the array & returns it 

// Practice Question
let months = ["january", "july", "march", "august"];
// months[0] = "july";
// months[1] = "june";
// first do with simple methods, then use splice method

let colors = ["red", "green" , "yellow"];
let colors2 = ["blue","voilet", "orange"];  // for indexOf and includes method

let arrDemo = ["chair", "money", "God" , "laptop"];  // for slice method

// question 2

let arr2 = ["c","c++","html","javascript","python", "java","c#","sql"];

// Nested Array Or Multi-dimensional Array
let arr2d = [[2,5],[6,4],[9,8]];

// Practice Question

let tictactoe = [["X", " " , "O"],[" ", "X", " "], ["O"," ", "X"]];

// Assignment Questions

// q1
let sampleArr = [1, 3, 4, 6, 9, 80, 55];

let n = 3;
let ans1 = sampleArr.slice(0, n);
console.log(ans1);
