// Guessing Game

const max = prompt("Enter Maximum Number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the no.");

while(true){
    if(guess == "quit"){
        console.log("You Quit the game. Random no. was", random);
        break;
    }
    if(guess == random){
        console.log("You are Correct! Congrats!! Random no. is ", random);
        break;
    }
    else if( guess < random){
        guess = prompt("Hint: Your Guess was too small. Try Again");
    }
    else{
        guess = prompt("Hint : Your Guess was too large. Try Again");
    }
}