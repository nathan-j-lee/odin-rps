// Rock Paper Scissors against a computer

// User chooses rock, paper, or scissors
// Does not have to be case-sensitive
// Computer randomly chooses rock, paper, or scissors
// Decide who wins based on rps rules

function computerChoice() {
    var computer = Math.floor(Math.random() * 3);
    if (computer == 0) return "rock";
    else if (computer == 1) return "paper";
    else if (computer == 2) return "scissors";
    else {
        console.error("Computer chose invalid number somehow");
    }
}

function decision(user, comp) {
    if (user == "rock") {
        if (comp == "rock") console.warn("Tie");
        else if (comp == "paper") console.error("Lose");
        else if (comp == "scissors") console.log("Win");
    }
    if (user == "paper") {
        if (comp == "rock") console.log("Win");
        else if (comp == "paper") console.warn("Tie");
        else if (comp == "scissors") console.error("Lose");
    }
    if (user == "scissors") {
        if (comp == "rock") console.error("Lose");
        else if (comp == "paper") console.log("Win");
        else if (comp == "scissors") console.warn("Tie");
    }
}

function game() {
    var userChoice = prompt("Choose rock, paper, or scissors");
    userChoice = userChoice.toLowerCase();
    console.log("User picks " + userChoice);
    var computer = computerChoice();
    console.log("Computer chose " + computer);
    decision(userChoice, computer);
}

for (let i = 0; i < 5; i++) {
    game();
}