function computerPlay(){
    choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random()*3)];
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let outcome = "";
    if (playerSelection===computerSelection){
        return `Tie! ${playerSelection} can't beat ${computerSelection}.`;
    } else if ((playerSelection==="rock"&&computerSelection==="scissors")||(playerSelection==="paper"&&computerSelection==="rock")||(playerSelection==="scissors"&&computerSelection==="paper")){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else{
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
function game(){
    for (let i = 0; i<5; i++){
        let playerChoice;
        while (true){
            playerChoice = prompt("Enter choice: ");
            if (["rock", "paper", "scissors"].includes(playerChoice.toLowerCase())) {
                break;
            }
            console.log("Invalid input, please try again!");
        }
        const computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice));
    }
}
game();