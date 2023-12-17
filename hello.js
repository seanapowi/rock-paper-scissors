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

//We haven't called the fuction  here
function playRound(playerSelection, computerSelection){


}