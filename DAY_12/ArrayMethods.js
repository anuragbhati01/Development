// Array Methods

let arr = [2, 4, 6, 2, 5, 7, 9];

function print(el){
    console.log(el);
}

// OR

arr.forEach((el) => {
    console.log(el);
});
console.log("--------------");
arr.forEach(print);


console.log("--------------");
// On Array of Objects

let students = [{
    firstName : "Harsh",
    marks : 87
},
{
    firstName: "Ankit",
    marks: 92
}, 
{
    firstName: "Ansh",
    marks: 99.99
}];

students.forEach((student) => {
    console.log(student.marks);
});

// map() function

let arr2 = [2, 4, 6, 8];

let double = arr2.map((el) => {
    return el * 2;
});

console.log("--------------");
// Print GPA of Students

let gpa = students.map( (el) => {
    return el.marks/10;
});

// filter() method

let nums = [2, 45, 90, 30, 34, 44, 33, 21, 64, 67, 89];

let even = nums.filter( (el) =>{
    return el % 2 == 0;
});


// .every() method

let result = [1, 2, 3, 4].every( (el) => (el % 2 == 0));
console.log(result);

// .some(method)

let output = [1, 2, 3, 4].some( (el) => (el%2==0));
console.log(output);

// .reduce function

let result1 = [1, 2, 3, 4].reduce( (res, el) => (res+el));
console.log(result1);

// Maximum in an Array
let num = [1, 4, 3, 6, 9, 3, 3, 45, 56];

let max = num.reduce((max, el) => {
    if(max < el) return el;
    else return max;
});
console.log("Maximum of an array is", max);

// Practice Question

let op1 = [12, 30, 45, 30].every((el) => (el%10==0));
console.log(op1);

// Minimum in an Array
let num1 = [16, 39, 9, 34, 56, 88, 87];
let min = num1.reduce( (min, el) => {    // Both min are different because one has global scope and another has function scope.
    if(min < el) return min;
    else return el;
})

console.log("Minimum of an array is", min);

// Default Paramters

function sum(a, b=3) {
    return a + b;
}

console.log(sum(2)) // a = 2, b = 3

// Spread

console.log(..."Anurag Rajput");
console.log(...[1, 3, 5, 68, 99]);

// Spread with Array Literals

let arr4 = [ 1, 2, 3, 4, 5];
let newArr = [...arr4];
console.log(newArr);

let newStr = [..."hello"];
console.log(newStr);

// Spread with Object Literals

const data = {
    email : "xyz@gmail.com",
    password : "********"
};

const dataCopy = {...data, id: 124, country: "India"};
console.log(dataCopy);

let arr5 = [1, 2, 3, 4, 5];
const obj3 = {...arr5};
console.log(obj3); 

console.log("*------*------*------*");

// REST  (Opposite of Spread)

function sum(...args){
    return args.reduce( (sum, el) => sum+el);
}
console.log(sum(1, 3, 56, 7));

// Inbuild argument (It is collection, some array methods didn't apply to it)

function mini(a, b, c, d){
    console.log(arguments);
   // arguments.push(84);   // Gives an error
}
mini(1, 4, 5, 7);

function mini2(msg, ...args){
    console.log(msg);
    return args.reduce( (min, el) => {
        if( min < el) return min;
        else return el;
    });
}

console.log(mini2("Ram Ram", 1, 5, 8, 45, 67));

// Destructuring

let sampleArr = ["ankit", "ansh", "anurag"];

let [winner, runnerup] = sampleArr;

console.log(winner);
console.log(runnerup);

// for Objects
console.log("---------------------------");


const collegeStudent = {
    firstName : "Anurag",
    age : 19,
    year : "3rd",
    branch : "CSE",
    username : "anurag@01",
    password : "******"
};

let { username: user, password: secret, city: place = "Gurgoun"} = collegeStudent;

console.log(user, secret, place);