let userImput = prompt("Hye there, please enter your option (either rock, paper or scissors)    ");
userImput = userImput.toLocaleLowerCase();

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);

    if(randomNumber === 0){
        return "Rock";
    }
    else if (randomNumber === 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//We haven't called the fuction here
function playRound(playerSelection, computerSelection){

if(playerSelection === computerSelection){
    return "It's a TIE, play again";
}
if(playerSelection === "rock"){
    if(computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    }
    else {
        return "Congratulations, You win";
    }
}
if(playerSelection === "paper") {
    if(computerSelection === "scissors"){
        return "You Lose! Scissors beats paper";
    }
    else {
    return "Congratulations, You win";
    }
}
if(playerSelection === "scissors"){
    if(computerSelection === "rock"){
        return "You Lose! Rock beats Scissors";
    }
    else{
        return "Congratulations, You win";
    }
}
}

function game(){
    const playerSelection = userImput;
    const computerSelection = getComputerChoice();
    console.log('playerSelection: ${playerSelection} VS. computerSelection: ${computerSelection}');
    console.log(playRound(playerSelection, computerSelection));
}

game();