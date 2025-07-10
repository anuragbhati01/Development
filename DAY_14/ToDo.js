// To Do app

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(e){
    // Addition
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";
    // Deletion

    let delbtn = document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText = "Delete";

    item.appendChild(delbtn); 
});
// Event Delegation

ul.addEventListener("click", function(e){
    if(e.target.nodeName == "BUTTON"){
        let listItem = e.target.parentElement;
        listItem.remove();
    }
});


// let dblbtns = document.querySelectorAll(".delete");
// for(dblbtn of dblbtns){
//     dblbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }
