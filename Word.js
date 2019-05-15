var Letter = require("./Letter.js")


function Word(Woord) {
    this.letterArr = [];
    this.compare = "";
    for (var i = 0; i < Woord.length; i++) {
        this.letterArr.push(new Letter(Woord[i]))
    }
    this.createWoordString = function () {
        var finalWoordString = "";
        for (var j = 0; j < this.letterArr.length; j++) {
            finalWoordString += this.letterArr[j].returnChar() + " ";
        }
        return finalWoordString
    }
    this.guessCheck = function (userInput) {
        for (var x = 0; x < this.letterArr.length; x++) {
            this.letterArr[x].guessCheck(userInput)
        }
    }

}


module.exports = Word;
