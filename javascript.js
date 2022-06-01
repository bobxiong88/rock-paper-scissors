let playerScore = 0;
let computerScore = 0;

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
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else{
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
const buttons = document.querySelector("#choices").childNodes;

const results = document.querySelector('#results');
const userChoice = document.querySelector('#userChoice');
const computerChoice = document.querySelector('#computerChoice')
const outcome = document.querySelector('#outcome');
const score = document.querySelector('#score');

const endGame = document.querySelector("#endGame");
const endGameMessage = document.querySelector("#endGameMessage");
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if (playerScore<5&&computerScore<5){
            let playerSelection = button.id;
            let computerSelection = computerPlay();
            userChoice.textContent = `You chose ${playerSelection}`;
            computerChoice.textContent = `Computer chose ${computerSelection}`;
            outcome.textContent = playRound(playerSelection, computerSelection);
            score.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
        } 
        if (!(playerScore<5&&computerScore<5)){
            if (playerScore > computerScore) endGameMessage.textContent = "You take the W!!"
            else endGameMessage.textContent = "Computer takes the W!";
        }
    });
});

