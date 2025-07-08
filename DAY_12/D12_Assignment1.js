// JS Part 8 Assignment Solutions 

// q1

let arr = [1, 2, 3, 4, 5];

function result(arr){
    //Square
    let newArr = arr.map( (el) => el*el);

    // Sum 
    let sum = newArr.reduce( (sum, el) => sum+el);

    let average = sum/arr.length;

    console.log(average);
}

result(arr);
// q2

let ans2 = arr.map((el) => el+5);

console.log(ans2);

// q3

let str = ["harsh", "ansh", "ankit"];
console.log(str.map((string) => string.toUpperCase()));

// q4

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    args.map( (el) => el * 2),
];

console.log(doubleAndReturnArgs([1, 2, 3], 6, 7));

// q5

const mergeObj = (obj1, obj2) => ({...obj1, ...obj2});

console.log(mergeObj({ a: 1, b: 2}, {c: 5, d: 8}));