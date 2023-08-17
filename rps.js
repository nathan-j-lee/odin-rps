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

const div = document.querySelector('#result');

function playRound(choice) {
    computer = randomChoice();
    console.log("You picked " + choice + ".");
    console.log("Computer picked " + computer + ".");
    res = "error if you see this";
    if (choice == "rock") {
        if (computer == "rock") res = "It's a tie!";
        else if (computer == "paper") res = "You lose!";
        else if (computer == "scissors") res = "You win!";
    }
    else if (choice == "paper") {
        if (computer == "rock") res = "You win!";
        else if (computer == "paper") res = "It's a tie!";
        else if (computer == "scissors") res = "You lose!";
    }

    else if (choice == "scissors") {
        if (computer == "rock") res = "You lose!";
        else if (computer == "paper") res = "You win!";
        else if (computer == "scissors") res = "It's a tie!";
    }

    div.textContent=res;
}