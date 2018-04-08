// Word.js should only require Letter.js
var Letter = require("./letter.js");

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
var Word = function(word) {
    // Store the string "word."
    this.word = word;
    //var word = word;
    // An array of new Letter objects representing the letters of the underlying word
    this.lettersInWord = [];
    // Populate the lettersInWord array with letter objects from the word.
    for (var i = 0; i < word.length; i++) {
        var letter = new Letter(word[i]);
        this.lettersInWord.push(letter);
    };
    // this.wordSearch = function() {
    //     for (var i = 0; i < this.word.length; i++) {
    //         //var letter = new Letter(word[i]);
    //         //this.lettersInWord.push(letter);
    //         this.lettersInWord.push(new Letter(word[i]));
    //     };
    // };


    // this.displayWord = function() {
    //     this.wordDisplay = "";
    //     for (var i = 0; i < this.lettersInWordlength; i++) {
    //         if (this.lettersInWord[i].showLetter === false) {
    //             this.wordDisplay += "_ ";
    //         } else if (this.lettersInWord[i].showLetter === true) {
    //             this.wordDisplay += this.lettersInWord[i].actualLetter + " ";
    //         }
    //     }
    //     console.log(wordDisplay);
    // };
};

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
Word.prototype.blanksAndLetters = function () {
    var display = " ";
    for (var i = 0; i < this.lettersInWord.length; i++) {
        display+= this.lettersInWord[i].showOrHide() + " ";
    };
    console.log(display);
};

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
Word.prototype.checkLetters = function(guess) {
    for (var i = 0; i < this.lettersInWord.length; i++) {
        this.lettersInWord[i].checkGuess(guess);
    };
    // Why?
    this.toString;
};

module.exports = Word;

// var word = new Word("burrito");
// word.checkLetters('b');
// word.toString();
//console.log(word.lettersInWord);