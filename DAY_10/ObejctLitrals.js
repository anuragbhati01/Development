// Object Litrals in JavaScript

let student1 = {
    firstName : "Anurag",
    age : 19,
    marks : 94.5
};
console.log(student1);

// Creating a Post

const post = {
    username: "anurag@22",
    content: "first post on Instragram",
    likes: 55000,
    reposts: 2300,
    tags: ["ansh@33", "ankit@34", "rohit@54"]
};
console.log(post);

// Getting Values

console.log(post["username"]);
// OR
console.log(post.username);


// JavaScript Automatically converts object's key to string

const example = {
    1 : "one",
    2 : "two",
    null : "this is Null",
    undefined : "this is Undefined",
    false : "this is False"
};

// Manipulation Object Litrals

// updation
student1.age = 20;

// Insertion or Addition

student1.gender = "Male";
student1.city = "Padampur";
student1.marks = "A";

// Deleting
delete student1.city;

console.log("After Manipulation:", student1);

// Nested Objects

const studInfo = {
    Harsh: {
        grade: "A",
        city: "Padampur"
    },
    Ankit: {
        grade: "O",
        city: "Jaipur"
    },
    Ansh: {
        grade: "A+",
        city: "Gurgoun"
    }
};

// Array of Objects

const studInfoArr = [
    {
        firstname : "Harsh",
        city: "Padampur"
    },
    {
        firstname: "Ankit",
        city: "Jaipur"
    },
    {
        firstname: "Ansh",
        city: "New Delhi"
    }
]

// Random Integers

// from 1 t 100

let random1 = Math.floor(Math.random() * 100) + 1;
console.log(random1);

// from 1 to 5
let random2 = Math.floor(Math.random() * 5) + 1;
console.log(random2);

