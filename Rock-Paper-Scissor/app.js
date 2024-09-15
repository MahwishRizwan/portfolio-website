let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("comp-score");

const genCompChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]

}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "#08415C";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#B5FFE1";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#EBBAB9";
    }
};

const playGame = (userChoice) => {
    // Generate comp choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissor
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "rock"?true: false;
        }
        else{
            //rock, papeer
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

