// Arrays are the Linear Data Sturctures which are contigously stored in the Memory.

let students = ["harsh","ansh","ankit"];

//console.log(students[2]);

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

// let colors = ["red", "green" , "yellow"];
// let colors2 = ["blue","voilet", "orange"];  // for indexOf and includes method

// let arrDemo = ["chair", "money", "God" , "laptop"];  // for slice method

// question 2

let arr2 = ["c","c++","html","javascript","python", "java","c#","sql"];

// Nested Array Or Multi-dimensional Array
let arr2d = [[2,5],[6,4],[9,8]];

// Practice Question

let tictactoe = [["X", " " , "O"],[" ", "X", " "], ["O"," ", "X"]];

// Assignment Questions

let arr = [1, 3, 5, 234, 44, 55,2 ];
let n = 3;
console.log(arr.slice(0, n));   // q1
console.log(arr.slice(arr.length-n));   // q2


// q3
// let str = prompt("Enter String");
// if(str.length == 0){
//     console.log("String is Blank.");
// }
// else{
//     console.log("String is not Blank");
// }

// q4
let str2 = "aNuRaGBHatI";
let idx = 6;
console.log(str2[6]);
if(str2[idx] == str2[idx].toLowerCase()){
    console.log("The character is in Lowercase");
}
else{
    console.log("The character isn't in lowercase");
}

// q5
let str3 = "     Simple String with some Spaces.    ";
let newStr3 = str3.trim();
console.log(`String Before is : ${str3}`);
console.log(`String After is : ${newStr3}`);
// q6
let arr4 = [];
if(arr4.length == 0){
    console.log("The array is empty");
}
else {
    console.log("the array is filled with some value");
}
