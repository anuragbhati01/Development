// DOM Events
let btns = document.querySelectorAll("button");

// btn.onclick = function(){
//     console.log("You Clicked Me!!");
// }

// or

function hello(){
    alert("Hello Brother");
}
function names(){
    alert("I am Jarvis AI");
}

for(btn of btns){
    //btn.onclick = hello;
    btn.onmouseenter = function(){
        console.log("You used btn onmouseenter power");
    }
    //btn.onclick = names;  // onclick property works only for one value
    // we use Event Listener

    btn.addEventListener("click", hello);
    btn.addEventListener("click", names);
    // btn.addEventListener("dblclick", function(){
    //     console.log("You used Double Click Power");
    // });
}


let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("Clicked Para");
});

let div = document.querySelector("div");
div.style.backgroundColor = "bisque";
div.style.border = "2px solid black";
div.style.height = "100px";
div.style.width = "50%";

div.addEventListener("mouseenter", function(){
    console.log("you entered in the box");
});

// this in Event Listener

let btn4 = document.querySelector("#btn-4");
btn4.addEventListener("click", function(){
    console.log(this.innerText);
});

let h3 = document.querySelector("h3");
let h5 = document.querySelector("h5");

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = "bisque";
}

h3.addEventListener("click", changeColor);
h5.addEventListener("click", changeColor);

// Keyboard events

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log(event.key);
    console.log(event.code);
    console.log("Key was Pressed");
});

let game = document.querySelector("#game");

game.addEventListener("keydown", function(event){
    console.log("code", event.code);
    if(event.code == "KeyW"){
        console.log("Character Moves Up");
    }
    else if(event.code == "KeyS"){
        console.log("Character Moves Down");
    }
    else if(event.code == "KeyD"){
        console.log("Character Moves Left");
    }
    else{
        console.log("Character Moves Right");
    }
});


// Form Events

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    // OR

    // let user = this.elements[0];
    // let pass = this.elements[1];
    // console.log(user.value);
    // console.log(pass.value);
});

let user = document.querySelector("#user");
user.addEventListener("change", function(event){
    console.log("Change Event");
    console.log("Final Value", this.value);
});
user.addEventListener("input", function(event){
    console.log("Input Event");
    console.log("Final Value", this.value);
});

// Text Editor

let textInp = document.querySelector("#textInp");
let txtPara = document.querySelector("#txtEd");

textInp.addEventListener("input", function(){
    console.log("Input Value", this.value);
    txtPara.innerText = this.value;
});

