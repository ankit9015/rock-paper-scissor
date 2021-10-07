const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissor = document.querySelector("#scissor");
const imagePlayerChoice = document.querySelector("#player-show");
const imageComputerChoice = document.querySelector("#computer-show")
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const popResult = document.querySelector("#pop-result");
const buttonRestart = document.querySelector("#button-restart");

// console.log(inside);

const db = {"rock": `<img class="option-img" src="" alt="Rock">`,
        "paper": `<img class="option-img" src="" alt="Paper">`,
        "scissor": `<img class="option-img" src="" alt="Scissor">`
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

function newMove(playerChoice) {
    if (playerWin + computerWin === 5) {
        setTimeout(resultPop(), 200);       
    }

    let computerChoice = computerMove(db);

    imagePlayerChoice.innerHTML = db[playerChoice];
    imageComputerChoice.innerHTML = db[computerChoice];
    
    compareChoices(playerChoice, computerChoice);

    playerScore.innerText = playerWin;
    computerScore.innerText = computerWin;

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
    } else if (player === "rock" && computer ==="scissor") {
        console.log("win");
        playerWin += 1;
    } else if (player === "scissor" && computer === "paper") {
        console.log("win");
        playerWin += 1;
    } else if (player === "paper" && computer === "rock") {
        console.log("win");
        playerWin += 1;
    } else {
        console.log("lost");
        computerWin += 1;
    }
};

function resultPop () {
    popResult.style.display = "block";
};

function refresh () {
    playerWin = 0;
    computerWin = 0;

    playerScore.innerText = playerWin;
    computerScore.innerText = computerWin;

    imagePlayerChoice.innerHTML = '';
    imageComputerChoice.innerHTML = '';

}

