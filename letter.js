// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
function Letter(letter, guessed) {
    // A string value to store the underlying character for the letter
    this.letter = "x";
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.charGuessed = function() {
        if (this.guessed === true) {
            // return correct guessed letter
            console.log(this.letter);
        } else {
            // return underscore
            console.log("_");
        };
    };
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkGuess= function (character) {
        if (character === this.letter) {
            // update stored boolean value to true
            this.guessed = true;
        } else {
            console.log("wrong guess");
        };
    };
}

var letters = {}
letters.x = new Letter();

Letter();

// letters.x.checkGuess("b");
// letters.x.charGuessed();
checkGuess("x");
charGuessed();
    // Letter.js should not require any other files.

    // HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js

