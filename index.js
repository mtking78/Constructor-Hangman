// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
var Word = require("./word.js");
var inquirer = require("inquirer");

// Randomly selects a word and uses the Word constructor to store it.
var wordBank = ["canadian bacon", "pineapple", "extra cheese", "anchovies", "banana peppers", "black olives", "mushrooms", "pepperoni", "sausage"];
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var newWord = new Word(randomWord);
var remainingLetters = newWord.lettersInWord.length;

// Same process as above, but called to load a new word when one is solved.
function getWord () {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    newWord = new Word(randomWord);
}

// Game variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var correctLetters = [];
getWord();
playHangman();

// Prompts the user for each guess and keeps track of the user's remaining guesses
function playHangman () {
    console.log(wins + " wins, " + losses + " losses, " + guessesLeft + " guesses remaining.");
    newWord.blanksAndLetters();

    inquirer.prompt(

        {
            type: "input",
            name: "guess",
            message: "Guess a letter",
        },

    ).then(function(player) {
        newWord.checkLetters(player.guess);
        // *** Redo to only work on missed guesses ***
        guessesLeft--;
        for (i = 0; i < newWord.lettersInWord.length; i++) {
            if (player.guess === newWord.lettersInWord[i].actualLetter){
                correctLetters.push(player.guess);
                //console.log("Correct Letter Array: " + correctLetters);
            };
        };

        // Checks to see if all letters have been guessed in current word.
        if (newWord.lettersInWord.length === correctLetters.length) {
            console.log("You solved it!");
            wins += 1;
            newWord.blanksAndLetters();
            correctLetters = [];
            guessesLeft = 10;
            console.log("\n");
            getWord();
            playHangman();
        } else {
            playHangman();
        };
    })
};


//var word = new Word("burrito");
// newWord.checkLetters('b');
// newWord.blanksAndLetters();