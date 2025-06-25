// Assignment Questions
// q1
let num = 50;
if(num%10===0){
    console.log("Good")
}
else{
    console.log("Bad")
}

// q2
// let firstName = prompt("Enter name");
// let age = prompt("Enter age");
// let msg = `${firstName} is ${age} old`;
// alert(msg);

//q3
let quarter = 3;

switch(quarter){
    case 1:
        console.log("January, Feb, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Wrong quarter entered");
}

// q4

let golStr = "Armenia";
if((golStr[0]==='A' || golStr[0]==='a') && golStr.length > 5){
    console.log("Goldern String");
}
else{
    console.log("Not a Golden String");
}

//q5

let a, b, c;
a = 6;
b = 4;
c = 7;

if((a>b) && (a>c)){
    console.log(`${a} is Greater`);
}
else if((b>a) && (b>c)){
    console.log(`${b} is Greater`);
}
else {
    console.log(`${c} is Greater`);
}

// q6
let x, y;
x = 32;
y = 47892;

if((x%10) === (y%10)){
    console.log(`${x} and ${y} has common digit which is ${x%10}`);
}
else{
    console.log("Don't have same digits.");
}

// String Methods
// trim() , toUpperCase() and toLowerCase() methods
let str1 = "   hello!  ";
console.log(str1.trim().toUpperCase());

// String Slicing
let newstr = "IloveCoding!";
console.log(newstr.slice(1, 5));        // .slice(si, ei) or .slice(si) 

// Replace and Repeat methods in Strings

console.log(newstr.replace("love", "do") + "\n");
console.log(newstr.repeat(4));


// Strings Practice Question

// q1
let str2 = "help! ";
console.log(str2.trim().toUpperCase());

// q2
let str3 = "ApnaCollege";
console.log(str3.slice(4).replace("l","t").replace("l","t"));