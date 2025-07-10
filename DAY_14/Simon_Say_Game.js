// Simon Say Game

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "green", "orange", "red"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Starts");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerHTML = `Game Over! Your Score : ${level} <br> Press Any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        updateScore();
        reset();
    }
}

function updateScore(){
    if(level > highscore){
        highscore = level;
        localStorage.setItem("highscore", highscore);
        document.querySelector("#high-score").innerText = `High Score ${highscore}`;
    }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}

let highscore = localStorage.getItem("highscore") || 0;

document.querySelector("#high-score").innerText = `High Score is ${highscore}`;