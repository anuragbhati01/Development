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
