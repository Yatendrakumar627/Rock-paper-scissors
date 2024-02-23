

let userScore = 0; //user score for the game
let compScore = 0; //computer's score in the game


const choices = document.querySelectorAll(".choice"); // select choice class element select 
const msg = document.querySelector("#msg"); //select message id element 
const userScorePara = document.querySelector("#user-score"); //select user score paragraph
const compScorePara = document.querySelector("#comp-score"); //select comp score paragraph

// random choice generator by comp
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// Draw game
const drawGame = () => {
    // console.log("Game was draw...!!!");
    msg.innerText = 'Game was Draw. Play again!!! ';
    msg.style.backgroundColor = "blue";
}

// Win or loose
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win !!!");
        msg.innerText = `You win. Your ${userChoice} beats ${compChoice}!!!`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose !!!");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}!!!`;
        msg.style.backgroundColor = "red";

    }
}



// choice generator by user
const playGame = (userChoice) => {
    // console.log("user choice = " , userChoice);
    // Generator computer choice -> moduler form
    const compChoice = genCompChoice();
    // console.log("comp choice = " , compChoice);// display result on screen

    if(userChoice === compChoice) {
        drawGame(); // call function when it is a draw
    } else {
        let userWin = true;

        if(userChoice === "rock") {
            //scissors or paper only option to choose (3rd choice draw)
            userWin = compChoice === "paper" ? false : true;

        }else if(userChoice === "paper") {
            //rock or scissors only option to choose (3rd choice draw)
            userWin = compChoice === "scissors" ? false : true;

        }else{
            //paper or rock only option to choose (3rd choice draw)
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice); //call the function with parameter
    }
}



choices.forEach((choice) => { // traverse for each choice
    // console.log(choice);
    choice.addEventListener("click", () => { // track click event on each choice
        const userChoice = choice.getAttribute("id"); // get the user id of the choice
        // console.log("choice was clicked", userChoice);
        playGame(userChoice); // call the function with parameter as user selected option
    });
});








