// Loops in Javascript

let n = 12;
for(let i=1; i<=n; i++){
    console.log(`Radhe Radhe ${i}`);
}

// Print Odd and Even no.
console.log("Even and Odd no")
for(let i=1; i<=30; i++){
    if(i%2==0){
        console.log(`Even no. : ${i}`);
    }
    else{
        console.log(`Odd no. : ${i}`);
    }
}

// Table of 5
// console.log("Tables");
// let x = prompt("Enter any no. for table :");
// for(let i=1; i<=10; i++){
//     console.log(`${x} * ${i} : ${x*i}`);
// }

// Nested Loops

for(let i=1; i<=3; i++){
    console.log(`Outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

// Whlie Loops

let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

// Guesing game

// const favourite = "Avengers 4";
// let guess = prompt("Guess my Favourite Movie");
// while(guess != favourite){
//     if(guess == "quit"){
//         console.log("You Quit the Game");
//         break;
//     }
//     guess = prompt("Wrong enter Again");
// }

// if(guess == favourite){
//     console.log("Congrats!!");
// }

// Loops with Arrays
console.log("Loops with Arrays");
let fruits = ["mango", "lichi", "banana", "apple", "watermelon"];
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

// Loops with Nested Arrays
console.log("Loops with Nested Arrays.");

let heroes = [["Ironman", "Loki", "Thor", "Moon Knight"], ["Superman", "Batman", "Flash", "Wonder Women"]];

for(let i=0; i<heroes.length; i++){
    console.log(`List ${i}`);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}

// for-of loop

console.log("for-of loop");

for(fruit of fruits){
    console.log(fruit);
}

let firsName = "Anurag";
for(char of firsName){
    console.log(char);
}