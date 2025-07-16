// exporting from same directory

// module.exports in JS
// let math = require("./math");

// console.log(math.sum(4, 5));

// let n = 5;

// for(let i=1; i<=n; i++){
//     console.log("Hello", i);
// }

// let value = process.argv;
// for(let i=2; i<value.length; i++){
//     console.log("Hello", value[i]);
// }

// exporting from another directory

// const info = require("./Fruits");

// console.log(info);

// Globally using package

// const figlet = require("figlet");

// figlet("Radhe Radhe", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// import topic

import {sum, PI} from "./math.js";

console.log(sum(5, 5));
console.log(PI);