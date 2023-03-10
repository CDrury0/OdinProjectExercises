var playerScore = 0;
var computerScore = 0;

playGame();

function playGame(){
    let roundCounter = 1;
    while(playerScore < 5 && computerScore < 5){
        console.log("Round " + roundCounter);
        playRound();
        roundCounter++;
    }
    const winner = playerScore === 5 ? "Player" : "Computer";
    console.log(`${winner} wins the match!`);
}

function playRound(){
    const options = ["rock", "paper", "scissors"];
    let playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
    if(!options.includes(playerChoice)){
        console.log("Invalid player selection");
        playRound();
    }
    else{
        let computerChoice = options[Math.floor(Math.random() * 3)];
        scoreRound(playerChoice, computerChoice);
    }
}

function scoreRound(playerChoice, computerChoice){
    console.log("Player chose: " + playerChoice);
    console.log("Computer chose: " + computerChoice);

    if(playerChoice === computerChoice){
        console.log("It's a tie!");
    }
    else if(playerWins(playerChoice, computerChoice)){
        console.log("Player wins!");
        playerScore++;
    }
    else{
        console.log("Computer wins!");
        computerScore++;
    }

    console.log(`The score is now ${playerScore}-${computerScore} (Player-Computer)`);
}

function playerWins(playerChoice, computerChoice){
    //numbers are in the order of "selection, wins against"
    //ties are already checked, so if a check for winning fails, it must be a loss
    const matchupTable = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]];
    let matchup = matchupTable.find(a => a[0] === playerChoice);
    return matchup[1] === computerChoice;
}
