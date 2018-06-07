var computerChoices;
var computerGuess;
var userChoices;
var answerArray;
var wrongLetters;
var wins = 0;
// var maxTries = 12; 
var computerChoices = ["shawshankredemption", "pulpfiction", "toystory", "thegodfather", "fightclub", "thedarkknight", "savingprivateryan", "goodfellas", "rocky", "inception", "shutterisland", "dejavu", "manonfire"];
// var gameStart = false;
// var gameFinished = false;
var userGuess;
var guessesLeft;

//FUNCTION TO START GAME
function startGame() {

    // preventDefault();
    
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]
    guessesLeft = 12;
    wrongLetters = [];
    answerArray = [];
    
    console.log("playing");
        //LOOP TO REPLACE COMPUTER GUESS WITH UNDERSCORES
        for (var i = 0; i < computerGuess.length; i++) {
            computerGuess[i] = answerArray;
            answerArray.push("__ ");
            // console.log(answerArray);
        }
    
        function updateGuesses(userGuess) {
            // console.log("WOOOOOOOW");
            
    
            if (computerGuess.indexOf(userGuess) === -1 && wrongLetters.indexOf(userGuess) === -1) {
                
                wrongLetters.push(userGuess);
                guessesLeft--;
                console.log("HOLYMOLY");
            } else { 
                    for (var j = 0; j < computerGuess.length; j++) {
                        if (computerGuess[j] == userGuess) {
                            answerArray[j] = userGuess;
                        if (answerArray.indexOf(userGuess) === -1 ) {
                            answerArray.push(userGuess);
                            // console.log("WAIT, WHAT");
                        }
                    }
                }
    
            }
                refreshPage();
                checkWin();
    
                // console.log("THE ENDDD");
    
        }
    
        //RECORD KEY PRESSED
        $("body").keyup(function(event) {
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            updateGuesses(userGuess);
            console.log(userGuess);
    
        })
    
        var html = 
            "<p>Press any key to get started!" +
            "<p>Wins: " + wins + "</p>" +
            "Current Word: <br>" + answerArray.join(' ') + "<br>" +
            "Letters Guessed: " + wrongLetters +
        
            "<p>Guesses Remaining: " + guessesLeft + "<p>";
            // "<p>Letters Already Guessed: " + wrong letters + "<p>";
        
        // Set the inner HTML contents of the game div to my html
        document.querySelector("#stats").innerHTML = html;
    
    }

//RELOAD PAGE
function refreshPage() {
var html = 
        "<p>Press any key to get started!" +
        "<p>Wins: " + wins + "</p>" +
        "Current Word: <br>" + answerArray.join(' ') + "<br>" +
        "Letters Guessed: " + wrongLetters +
    
        "<p>Guesses Remaining: " + guessesLeft + "<p>";
    
    // Set the inner HTML contents of the game div to my html
    document.querySelector("#stats").innerHTML = html;
}

//GAME RESET -- LOSS
function loseGame() {
    alert("Sorry, you have lost the game.");
    location.reload();
}

//GAME RESET -- WIN
function winGame() {
    wins++;
    console.log(wins);
    refreshPage();
    startGame();
    // answerArray = [];
    // wrongLetters = [];
    // guessesLeft = 12;
    // wins+= 1;
    
//     alert("YOU WIN!!! PRESS 'OK' TO PLAY AGAIN!");
//     // startGame();
}

// CHECK LETTERS REMAINING FOR WIN
function checkWin() {
    if(answerArray.indexOf("__ ") === -1) {
        console.log("YOU WIN! PRESS 'OK' TO TRY AGAIN!");
        winGame();
    } else if (guessesLeft === 0) {
        console.log("...you lost! PRESS 'OK' TO TRY AGAIN!");
        loseGame();
    }
}

//GAME LOOP!!!

//START GAME
$(document).ready(
    startGame()
)
        
// END GAME LOOP!!!



// SETTING PAGE HTML
// // function refreshPage() {
//     var html = 
//         "<p>Press any key to get started!" +
//         "<p>Wins: " + wins + "</p>" +
//         "Current Word: <br>" + answerArray + "<br>" +
//         "Letters Guessed: " + wrongLetters +
    
//         "<p>Guesses Remaining: " + guessesLeft + "<p>";
//         // "<p>Letters Already Guessed: " + wrong letters + "<p>";
    
//     // Set the inner HTML contents of the game div to my html
//     document.querySelector("#stats").innerHTML = html;
    
//     // }