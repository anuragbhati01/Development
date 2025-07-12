// Advance JS

function hello(){
    console.log("Hello");
}

function greet(){
    hello();
}

console.log("Function Call Stack Example");
greet();
console.log("Work Done");

// Example

function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    return two() + one();
}

console.log("Ans of Example", three());

// JS Single Threaded Nature
// This is Asynchronous Nature of JS

// setTimeout( () => {
//     console.log("The wait period is done by browser and this function run by js");
// }, 2000);

console.log("...hello");

// CallBack Hell

// let h1 = document.querySelector("#greet");

// function changeColor(color, delay, nextColorChange){
//     setTimeout( ()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000, ()=> {
//             changeColor("blue", 1000, ()=> {
//                 changeColor("pink", 1000);
//             });
//         });
//     });
// });

// This is Callback nesting --> also known as Callback Hell

// Optimizing this code using promisis

// let h1 = document.querySelector("#greet");

// function changeColor(color, delay){
//     return new Promise( (resolve, reject) =>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("color changed!");
//         }, delay);
//     });
// }

// changeColor("red", 1000)
// .then( (result)=>{
//     console.log("Red was Changed");
//     return changeColor("orange", 1000);
// })
// .then((result)=>{
//     console.log("Orange was changed");
//     return changeColor("blue", 1000);
// })
// .then((result)=>{
//     console.log("blue was Changed");
// })
// .catch((error)=>{
//     console.log("Didn't given any Color");
// });

// Async and Await keywords

async function greet1() {
    throw "some random error";
    //return "hello!";
}

greet1()
.then( (result)=>{
    console.log("Promise Executed");
    console.log("result was :", result);
})
.catch( (err)=>{
    console.log("Promise Failed with err :", err);
});

console.log(greet1());
console.log("---------------------");
// async with arrow function

let demo = async () => {
    return 5;
}
console.log(demo());
console.log("-------------------------");
// await keyword

function getNum(){
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function output(){    // await is only used in async function
    await getNum();
    await getNum();
    getNum();
}

output();

// Optimizing color change code with async and await keyword

let h1 = document.querySelector("#greet");

function changeColor(color, delay){
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3){
                reject("Promise rejected");
            }


            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color change!");
        }, delay);
    });
}

async function newColor(){
    // Handling errors using try catch
    try{
        await changeColor("red", 1000);
        await changeColor("blue", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("pink", 1000);
        changeColor("violet", 1000);  
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new no. :", a+3);
    
}
newColor();