let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options =["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

 const drawGame =() => {
    console.log("Game was draw.");
    msg.innerText ="Game was draw, play again.";
    msg.style.backgroundColor = "#081b31";
 };

 const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win.");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("You lost");
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
  }



const playGame = (userChoice) => {
    console.log("User choice= ", userChoice);
     //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice= ", compChoice);



if(userChoice === compChoice){
    //Draw game
    drawGame();
}
else{
    let userWin =true;
    if(userWin ==="rock"){
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userWin = "paper"){
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    }
    else{
        //rock, paper
        userWin = compChoice ==="rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
}
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{

        let userChoice = choice.getAttribute("id");
        // console.log("Choice was Clicked", userChoice);
        playGame(userChoice);

    });
});