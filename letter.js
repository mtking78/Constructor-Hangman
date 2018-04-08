// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var Letter = function (actualLetter) {
    // A string value to store the underlying character for the letter
    this.actualLetter = actualLetter;
    // A boolean value that stores whether that letter has been guessed yet
    this.showLetter = false;

}
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
Letter.prototype.showOrHide = function() {
    if (this.showLetter === true) {
        // return correct guessed letter
        return(this.actualLetter);
    } else {
        // return underscore
        return " _ ";
    };
};
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
Letter.prototype.checkGuess = function (guess) {
    if (guess === this.actualLetter) {
        // update stored boolean value to true
        this.showLetter = true;
    };
};

module.exports = Letter;

//***** Testing this file only *****//
// Letter();
// var letters = {}
// letters.test = new Letter();
// checkGuess("b");
// showOrHide();