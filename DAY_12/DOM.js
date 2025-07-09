// Selecting Elements Using DOM

// 1. Selecting by Id

let imgObj = document.getElementById("mainImg");
console.dir(imgObj);
imgObj.border = "10px solid Black";

// 2. Selecting by Class Name

console.dir(document.getElementsByClassName("oldImg"));

console.dir(document.getElementsByClassName("oldImg")[1]);
console.log("-----------------------");
let smallImg = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImg.length; i++){
    console.dir(smallImg[i]);
}
console.log("----------------");
// 3. Selecting by Tagname

console.dir(document.getElementsByTagName("p"));

// Query Selector

console.dir(document.querySelector("p"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("#mainImg"));

console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("div a"));

let links = document.querySelectorAll(".box a");

for(let i=0; i<links.length; i++){
    links[i].style.color = "yellow";
}


// Manipulation using classList property

let heading = document.querySelector("h1");
console.dir(heading.classList);

heading.classList.add("green");

heading.classList.add("underline");

heading.classList.remove("green");

heading.classList.contains("yellow");       // checks class exist or not

heading.classList.toggle("green");     // adds or remove the classes  add --> if not exist, remove --> if exist

console.dir(heading.classList);

let box = document.querySelector(".box");

box.classList.toggle("bluebg");

// Navigation

let h4 = document.querySelector("h4");

console.log(h4.parentElement);
console.log(h4.children);

console.log(box.children);
console.log(box.childElementCount);

// Adding Elements in DOM

let newPara = document.createElement("p");

newPara.innerText = "Hi, I am SpiderMan";

let body = document.querySelector("body");
body.appendChild(newPara);

box.appendChild(newPara);

newPara.append("New Text is Here");
