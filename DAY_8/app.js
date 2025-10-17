console.log("Radhe Radhe!!");
console.log("Ram Ram!!");

// let day = prompt("Enter no. of a day in a week: ");
// switch(day){
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         break;
//     case "3":
//         console.log("Wednesday");
//         break;
//     case "4":
//         console.log("Thursday");
//         break;
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("Saturday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Input!! Please enter a valid day number between 1 to 7.");
// }

// let firstName = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// // alert(`Hello ${firstName}, you are ${age} years old!`);

// // Assignment JS Part 3

// let n = prompt("Enter a number: ");
// n = Number.parseInt(n);
// let arr = [7, 4, 5, 6, 9];
// console.log(arr);
// console.log(arr.slice(0, n+1));
// console.log(arr.slice(-n));

// let str = prompt("Enter a string: ");
// if(str.length == 0){
//     console.log("Empty String!!");
// }
// else{
//     console.log(str);
// }

// Part 4 LOOPS in JS

// let n = prompt("Enter a number: ");
// n = Number.parseInt(n);
// for(let i=0; i<=n; i++){
//     if(i%2==0) console.log(i, " is Even");
// }

// Mutliplication Table
// let num = prompt("Enter a number: ");
// num = Number.parseInt(num);
// for(let i=1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num*i}`);
// }

// Favourite Movie
// let favMovie = "Avengers Endgame";
// let guessMovie = prompt("Enter your favourite movie name: ");
// while ((guessMovie != favMovie) && (guessMovie != "quit")) {
//   console.log("Wrong Guess!! Try Again.");
//   guessMovie = prompt("Enter your favourite movie name: ");
// }

// if (guessMovie == favMovie) {
//   console.log("Congratulations!! You guessed it right.");
// }

// for-of Loop

// let fruits = ["kerry","apple", "watermelon", "banana", "mango", "litchi"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

// Todo app
// let todo = [];
// let req = prompt("Enter Your request: ");
// while(true){
//     if(req == "quit"){
//         console.log("Quiting App");
//         break;
//     }
//     if(req == "list"){
//         console.log("----------------");
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//     }
//     else if(req == "add"){
//         console.log("-------------------");
//         let task = prompt("enter task: ");
//         todo.push(task);
//         console.log("task added");
//     }
//     else if(req == "delete"){
//         let idx = prompt("enter the task index");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }
//     else{
//         console.log("wrong request");
//     }
//     req = prompt("Enter your new request: ");
// }

// Assignment questions

// q1

// const arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let n = prompt("Enter n: ");

// for(let i=0; i<arr.length; i++){
//     if(arr[i]==n){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// q2
// let n = prompt("Enter a number: ");
// let count = 0;
// let copy = n;
// while( copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count)

// q3
// let n = prompt("Enter n : ");
// let sum = 0;
// let copy = n;

// while(copy > 0){
//     let ld = copy % 10;
//     sum += ld;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

// q4
// let n = prompt("Enter n: ");
// let fact = 1;
// for(let i=1; i<=n; i++){
//     fact *= i;
// }
// console.log(fact);

// q5

const arr = [2, 4, 5, 9, 8];
let largest = 0;
for(let i=0; i<arr.length; i++){
    if( arr[i] > largest){
        largest = arr[i];
    }
}
console.log(largest);