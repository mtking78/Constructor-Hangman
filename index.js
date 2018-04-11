// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
var Word = require("./word.js");
// npm packages required to run game
var inquirer = require("inquirer");
var colors = require("colors");

// Randomly selects a word and uses the Word constructor to store it.
var wordBank = ["astros", "rangers", "mariners", "athletics", "angels", "indians", "tigers", "royals", "twins", "whitesox", "yankees", "redsox", "bluejays", "rays", "orioles", "giants", "dodgers", "rockies", "diamondbacks", "padres", "reds", "pirates", "cubs", "cardinals", "brewers", "braves", "marlines", "nationals", "mets", "phillies"];
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
var lettersGuessed = [];
var correctLetters = [];
getWord();

console.log("Time to play hangman - your category is MLB team names.".america.bold);
// Call the game function in the command line
playHangman();

// Prompts the user for each guess and keeps track of the user's remaining guesses
function playHangman () {
    console.log(wins + " wins, " + losses + " losses, " + guessesLeft + " guesses remaining." + "\n");
    newWord.blanksAndLetters();

    inquirer.prompt(
        {
            type: "input",
            name: "guess",
            message: "Guess a letter",
        },
    ).then(function(player) {
        if (lettersGuessed.indexOf(player.guess) != -1) {
            console.log("That letter has already been guessed!".yellow);
            playHangman();
        } else {
            lettersGuessed.push(player.guess);
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
                console.log("You solved it!".green);
                wins += 1;
                newWord.blanksAndLetters();
                console.log("\n" + "\nNEW WORD".bold.inverse);
                lettersGuessed = [];
                correctLetters = [];
                guessesLeft = 10;
                getWord();
                playHangman();
            } else if (guessesLeft <= 0) {
                console.log("No more guesses, you lose.".red + " The word was " + randomWord.bold.inverse);
                losses += 1;
                console.log("\n" + "\nNEW WORD".bold.inverse);
                lettersGuessed = [];
                correctLetters = [];
                guessesLeft = 10;
                getWord();
                playHangman();
            } else {
                playHangman();
            };
        };
    })
};


//var word = new Word("burrito");
// newWord.checkLetters('b');
// newWord.blanksAndLetters();