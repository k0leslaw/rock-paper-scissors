game();

function getComputerChoice ( ) {
    let choices = ["rock", "paper", "scissors"]
    let num = Math.floor(Math.random() * 3);

    return choices[num];
}

function getPlayerChoice (msg) {
    let choice = prompt(msg).toLowerCase();

    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = getPlayerChoice("Please choose either rock, paper, or scissors.");
    }

    return choice;
}

function playRound (playerSelection, computerSelection) {
    console.log("You chose " + playerSelection + ".");
    console.log("The computer chose " + computerSelection + "."); 
    console.log("You " + getWinner(playerSelection, computerSelection));
    console.log(" ");
}

function getWinner (ps, cs) {
    let state;

    if (ps == "rock") {
        if (cs == "rock") {
            state = "tied";
        } else if (cs == "paper") {
            state = "lose";
        } else if (cs =="scissors") {
            state = "win";
        }
    } else if (ps == "paper") {
        if (cs == "rock") {
            state = "win";
        } else if (cs == "paper") {
            state = "tied";
        } else if (cs =="scissors") {
            state = "lose";
        }
    } else if (ps == "scissors") {
        if (cs == "rock") {
            state = "lose";
        } else if (cs == "paper") {
            state = "win";
        } else if (cs =="scissors") {
            state = "tied";
        }
    }

    return state;
}

function game ( ) {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice("Rock, paper, or scissors?"), getComputerChoice());
    }
}
