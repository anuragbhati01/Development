// Guessing Game

// let max = prompt("Enter max number: ");
// let random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess no. :");
// while(true){
//     if(guess == "quit"){
//         console.log("Quitting Game, No. was. ", random);
//         break;
//     }
//     else if(guess == random){
//         console.log("Congrats, Right Guess");
//         break;
//     }
//     else if(guess < random){
//         guess = prompt("Hint: your guess was too small. Try again : ");
//     }
//     else{
//         guess = prompt("Hint: your guess was too large. Try again : ") ;
//     }
// }

// console.log(Math.floor(Math.random() * 6) + 1);
// console.log("------------");
// const car = {
//     carname: "BMW",
//     model : "z-1",
//     color: "black",
// }
// console.log(car.color);
// console.log("----------------");
// const Person = {
//     firstname: "Krish",
//     age : 18,
//     city: "Padampur",
// };

// function printTable(n){
//     for(let i=1; i<=10; i++){
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// }
// printTable(5);

// function printSum(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(printSum(5));


// function multipleGreet(func, count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }
// const greet = function(){
//     console.log("Greet!!");
// }

// multipleGreet(greet, 4);


// function oddOrEven(request){
//     if(request == "odd"){
//         const odd = function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }
//     else if(request == "even"){
//         const even = function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }
//     else{
//         console.log("wrong request!");
//     }

// }

// let request = "odd";
// let func = oddOrEven(request);

// console.log(func(5));

// const country = ["Australia", "England", "Germany", "United States of America"];

// const CountryCount = function(arr){
//     let str = "";
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].length > str.length){
//             str = arr[i];
//         }
//     }
//     return str;
// }
// console.log(CountryCount(country));

//  let str = prompt("Enter string : ");
// const countVowel = function(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++){ 
//         if(str[i] == "o" ||
//             str[i] == "e"  ||
//             str[i] == "i"  ||
//             str[i] == "a"  ||
//             str[i] ==  "u"){
//                 count++;
//         }
//     }
//     return count;
// }
// console.log(countVowel(str));

// let str = "abcdabcdefgggh";

// const uniqStr = function(str){
//     let ans = "";
//     for(let i=0; i<str.length; i++){
//         if(ans.indexOf(str[i]) == -1){
//             ans += str[i];
//         }
//     }
//     return ans;
// }

// console.log(uniqStr(str));

const arr = [3, 4, 6, 2, 7, 9, 5];
let num = 3
const getLarge = function(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
getLarge(arr, num);