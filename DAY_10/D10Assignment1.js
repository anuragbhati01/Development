// Assignment Answers

// q1

// let n = prompt("Enter an element which you want to delete form array");

// let arr = [2, 4, 5, 94, 88, 38, 23, 3, 4];

// for(let i=0; i<arr.length; i++){
//     if(n == arr[i]){
//        arr.splice(i, 1);
//     }
//     console.log(arr[i]);
// }

//q2

// let num = prompt("Enter a number");
// let count = 0;
// while(num > 0){ 
//     num = Math.floor(num/10);
//     count++;
// }
// console.log(`No. of digits in n are : ${count}`);

// q3

// let num = 2349;
// let sum = 0;
// let lastdigit = 0;
// while(num > 0){
//     lastdigit = num%10;
//     sum = sum + lastdigit;
//     num = Math.floor(num/10);
// }

// console.log("The sum of Digits in a number is ", sum);

// q4

// let n = prompt("Enter Factorial Number ");
// let fact = 1;
// for(let i=1; i<=n; i++){
//     fact *= i;
// }
// console.log(`The Factorial of ${n} is ${fact}`);

// q5
let arr = [3, 6, 18, 14, 34, 78, 2];
let largest = 0;
for(let i=0; i<arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log(`The Largest Element in the Array is : ${largest}`);