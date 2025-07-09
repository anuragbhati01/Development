// Practice Question Solution

let p = document.createElement("p");
p.innerText = "Hi, I'm Red";
p.style.color = "red";

let body = document.querySelector("body");
body.append(p);

let h3 = document.createElement("h3");
h3.innerText = "Hi, I'm Blue but H3!!";

h3.style.color = "blue";
body.append(h3);

let div = document.createElement("div");
let h1 = document.createElement("h1");
let divP = document.createElement("p");

h1.innerText = "I'm in div";
divP.innerText = "Me Too!!";

div.append(h1);
div.append(divP);

div.classList.add("box");

body.append(div);


let hr = document.createElement("hr");

body.append(hr);

let newh1 = document.createElement("h1");
newh1.innerText = "Assignement Solutions";
newh1.classList.add("heading");

body.append(newh1);

//---------------------------------------------------------

// Assignment Solution

//q1

let btn = document.createElement("button");
let input = document.createElement("input");

btn.innerText = "Click Me!!";

document.querySelector("body").append(btn);
document.querySelector("body").append(input);

//q2

input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

// q3
// let btn = document.querySelector("#btn")
btn.classList.add("#btn");

// q4

let q4h1 = document.createElement("h1");
q4h1.innerText = "DOM Practice";
q4h1.style.color = "white";
q4h1.style.backgroundColor = "blue";
q4h1.style.textDecoration = "underline"

body.append(q4h1);

//q5

let q4P = document.createElement("p");

q4P.innerHTML = "This is <b>Last</b> Question";

body.append(q4P);
