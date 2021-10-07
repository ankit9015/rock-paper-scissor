const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissor = document.querySelector("#scissor");
const imagePlayerChoice = document.querySelector("#player-show");
const imageComputerChoice = document.querySelector("#computer-show")
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const popResult = document.querySelector("#pop-result");
const buttonRestart = document.querySelector("#button-restart");
const currentResult = document.querySelector("#win-loss");
const popResultMessage = document.querySelector("#pop-message");

// console.log(inside);

const db = {"rock": `<img class="option-img" src="./images/rock.svg" alt="Rock">`,
        "paper": `<img class="option-img" src="./images/paper.svg" alt="Paper">`,
        "scissor": `<img class="option-img" src="./images/scissor.svg" alt="Scissor">`
};


buttonRock.addEventListener("click", () => {
    newMove("rock");
})

buttonPaper.addEventListener("click", () => {
    newMove("paper");
})

buttonScissor.addEventListener("click", () => {
    newMove("scissor");
})

buttonRestart.addEventListener('click', () => {
    refresh();
    popResult.style.display = "none";    
})

let playerWin = 0;
let computerWin = 0;
let countTrial = 0;

function newMove(playerChoice) {
    if (countTrial === 5) {
        console.log("win/Loss", playerWin, computerWin);
        if (playerWin > computerWin) {
            setTimeout(resultPop("You Won!!"), 200);   
        } else if (playerWin < computerWin) {
            setTimeout(resultPop("You Lost!!"), 200);   
        } else {
            setTimeout(resultPop("Draw Game"), 200);   
        }
            
    }

    let computerChoice = computerMove(db);

    imagePlayerChoice.innerHTML = db[playerChoice];
    imageComputerChoice.innerHTML = db[computerChoice];

    playerScore.innerText = playerWin;
    computerScore.innerText = computerWin;

    countTrial += 1;
    compareChoices(playerChoice, computerChoice);
    
};

function computerMove(db) {
    const dbKeyArray = Object.keys(db);

    let choice = Math.floor(Math.random()*dbKeyArray.length);
    // console.log(dbKeyArray[choice]);
    return dbKeyArray[choice];

};



function compareChoices(player, computer) {
    console.log(player, computer);
    if (player === computer) {
        console.log("draw");
        currentResult.innerText = "Draw"
        currentResult.style.color = "yellow"
    } else if (player === "rock" && computer ==="scissor") {
        console.log("win");
        currentResult.innerText = "You won!"
        currentResult.style.color = "green"
        playerWin += 1;
    } else if (player === "scissor" && computer === "paper") {
        console.log("win");
        currentResult.innerText = "You won!"
        currentResult.style.color = "green"
        playerWin += 1;
    } else if (player === "paper" && computer === "rock") {
        console.log("win");
        currentResult.innerText = "You won!"
        currentResult.style.color = "green"
        playerWin += 1;
    } else {
        console.log("lost");
        currentResult.innerText = "You Lost!"
        currentResult.style.color = "red"
        computerWin += 1;
    }
};

function resultPop (result) {
    popResult.style.display = "block";
    popResultMessage.innerText = result;
};

function refresh () {
    playerWin = 0;
    computerWin = 0;

    playerScore.innerText = playerWin;
    computerScore.innerText = computerWin;

    imagePlayerChoice.innerHTML = '';
    imageComputerChoice.innerHTML = '';

}

