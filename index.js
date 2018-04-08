// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
var Word = require("./word.js");
var inquirer = require("inquirer");

// Randomly selects a word and uses the Word constructor to store it
var wordBank = ["red", "orange", "yellow", "green", "blue", "purple"];
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var newWord = new Word(randomWord);
console.log(newWord);
//newWord.checkLetters("e");

// Game variables
var guessesLeft = 10;

playHangman();

// Prompts the user for each guess and keeps track of the user's remaining guesses
function playHangman () {
    console.log("You have " + guessesLeft + " guesses remaining.");
    newWord.blanksAndLetters();
    inquirer.prompt(

        {
            type: "input",
            name: "guess",
            message: "Guess a letter",
        },

    ).then(function(player) {
        newWord.checkLetters(player.guess);
        playHangman();
    })
}


//var word = new Word("burrito");
// newWord.checkLetters('b');
// newWord.blanksAndLetters();