// Rock Paper Scissors against a computer

// User chooses rock, paper, or scissors
// Does not have to be case-sensitive
// Computer randomly chooses rock, paper, or scissors
// Decide who wins based on rps rules

function randomChoice() {
    var computer = Math.floor(Math.random() * 3);
    if (computer == 0) return "rock";
    else if (computer == 1) return "paper";
    else if (computer == 2) return "scissors";
    else {
        console.error("Computer chose invalid number somehow");
    }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', function () {
    playRound("rock");
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function () {
    playRound("paper");
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function () {
    playRound("scissors");
});

userScore = 0;
compScore = 0;

const userScoreBox = document.querySelector('#userScore');
const compScoreBox = document.querySelector('#compScore');
const div = document.querySelector("#result");

userScoreBox.textContent = "Your score: " + userScore;
compScoreBox.textContent = "Enemy score: " + compScore;

function playRound(choice) {
    computer = randomChoice();
    console.log("You picked " + choice + ".");
    console.log("Computer picked " + computer + ".");
    res = "error if you see this";
    
    if (choice == "rock") {
        if (computer == "rock") res = "It's a tie!";
        else if (computer == "paper") {
            res = "You lose!";
            compScore++;
        }
        else if (computer == "scissors") {
            res = "You win!";
            userScore++;
        }
    }
    else if (choice == "paper") {
        if (computer == "rock") {
            res = "You win!";
            userScore++;
        }
        else if (computer == "paper") res = "It's a tie!";
        else if (computer == "scissors") {
            res = "You lose!";
            compScore++;
        }
    }
    else if (choice == "scissors") {
        if (computer == "rock") {
            res = "You lose!";
            compScore++;
        }
        else if (computer == "paper") {
            res = "You win!";
            userScore++;
        }
        else if (computer == "scissors") res = "It's a tie!";
    }
    if (userScore >= 5) {
        res = "You got to 5 points! You Win! Restarting...";
        userScore=0;
        compScore=0;
        
    }
    if (compScore >= 5) {
        res = "Computer got to 5 points! You Lose! Restarting...";
        userScore=0;
        compScore=0;
    }
    userScoreBox.textContent = "Your score: " + userScore;
    compScoreBox.textContent = "Enemy score: " + compScore;
    div.textContent = res;
}