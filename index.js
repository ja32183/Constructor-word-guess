var Word = require("./word.js");
var inquirer = require("inquirer")

var wordList = ["files", "test", "band", "drums", "screen", "mouse", "toilet", "mount", "javascript", "computer", "car", "house", "ruby", "server", ];
var randWord = "";
var displayWoord = "";
var finalWoord;
var leftToGuess;
var lives = 10

function newGame() {
    randWord = "";
    var r = parseInt(Math.floor(Math.random() * (wordList.length)))
    randWord = wordList[r]
    finalWoord = new Word(randWord)
    leftToGuess = finalWoord.letterArr.length
}

function gameOver() {
    {
        console.log("Game over.")
        inquirer.prompt([{
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play again?"
        }]).then(function (response) {
            if (response.playAgain) {
                newGame()
                print()
                askToGuess();
            } else {
                console.log("Ok, see you later!")
            }
        })
    }
}

function displayWord() {
    displayWoord = finalWoord.createWoordString()
    console.log(displayWoord);
    finalWoord.compare = displayWoord
}


function askToGuess() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter"
    }]).then(function (response) {
        var input = response.ask
        if (lives > 0) {
            if (input.length === 1) {
                finalWoord.guessCheck(input)
                displayWoord = finalWoord.createWoordString()

                if (finalWoord.compare === displayWoord) {
                    console.log("Nope, there is no", input, "in the word")
                    lives--
                    console.log("You have", lives, "guesse(s) remaining.")
                    if (lives === 0) {
                        gameOver()
                    } else {
                        print()
                        askToGuess()
                    }
                   
                } else {
                    console.log("Got one!")
                    leftToGuess--
                    print();
                    if (leftToGuess === 0) {

                        console.log("Nice! Here's the next word:");
                        newGame()
                        print();
                        askToGuess();
                    } else {
                        askToGuess()
                    }
                }

            } else if (input.length === 0) {
                consoel.log("Choose a letter.");
                askToGuess()
            } else {
                console.log("Pick one letter at a time.")
                askToGuess()
            }


        } else {
            gameOver()
        }
    })
}

function print() {
    console.log("\n")
    console.log("******************************************")
    displayWord()
    console.log("\n*****************************************")
    console.log("\n")
}
newGame()
print()
askToGuess();