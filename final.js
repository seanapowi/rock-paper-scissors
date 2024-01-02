function computerPlay(){
    // generate random number betwwen 0 - 2 
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return "rock";
    }
    else if (num === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
    
}

let computerSelection = computerPlay().toLowerCase();
console.log(computerSelection);


// play game round

function gameRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("It's a tie, No body wins");
        return null
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You Lose, paper beats rock");
        return false
    }
    else if ( playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win, Rock beats scissors");
        return true
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win, Paper beats rock");
        return true
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You Lose, Scissors chop paper");
        return false
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You Lose, rock beats scissors");
        return false
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win, scissor beat paper");
        return true
    }
    else {
        console.log("Not a valid input");
        return null
    }

}

// play the game
function game(){
    let playerSelection, computerSelection, result;
    let playerScore = 0;
    let computerScore = 0;
    const choices = ["rock", "paper", "scissors"];

    
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Enter your choice");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();

        // verify user entry
        while (!(choices.includes(playerSelection))){
            playerSelection = prompt("Enter your choice");
        }

        console.log(`User plays: ${playerSelection}, Computer plays: ${computerSelection}`);
        result = (gameRound(playerSelection, computerSelection));

        if (result){
            playerScore++;
        }else if (result === false){
            computerScore++;
        }
        console.log(`Current score-  Player: ${playerScore}, Computer: ${computerScore}`);

    }
    if (playerScore > computerScore){
        return "User wins!";
    }
    else if (computerScore > playerScore){
        return "You Lose, Computer Wins!";
    }
    else {
        return "No one wins, i'ts a draw, try again";
    }
}
console.log(game());

