let playerSelection = prompt("Please enter your option (either rock, paper or scissors");
playerSelection = playerSelection.toLowerCase();

let randomNumber = Math.floor(Math.random()*3);

if(randomNumber == 0){
    randomNumber = "rock";
}
else if (randomNumber == 1){
randomNumber = "paper";
}
else {
randomNumber = "scissors";
}
console.log(randomNumber);

function playGame(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins"
        }
        else if(choice2==="paper"){
            return "paper wins";
        }
    }
    else if(choice1==="paper"){
        if(choice2==="scissors"){
            return "scissors win"
        }
        else if(choice2==="rock"){
            return "paper wins";
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="paper"){
            return "scissors win"
        }
        else if(choice2==="rock"){
            return "rock wins";
        }
    }
    
}
console.log(playGame(playerSelection, randomNumber));

