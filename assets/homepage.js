
var letters = ["a", "b", "c"];

//empty array to hold what the user guesses
var lettersGuessed = [];

//a variable that will be randomly assigned one of the 3 letters
var lettersToGuess = null;

//the counter to count down from 9
var guessesLeft = 9;

//the counter for wins and losses
var wins = 0;
var losses = 0;

//applying the guesses left to the HTML
var updateGuessesLeft = function() {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLettersToGuess = function () {
  lettersToGuess = letters [Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  document.querySelector("#guesses-so-far").innerHTML = lettersGuessed.join(", ");
};

//function to be called once we reset everything
var reset = function() {
  guessesLeft = 9;
  lettersGuessed = [];
  updateLettersToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};


//function to capture keyboard clicks
document.onkeydown = function(event) {
  //reduce the guesses by one
  guessesLeft--;
  console.log(guessesLeft);
  
  //make the letter lowercase
  var letters = event.key.toLowerCase();
  
  //add the guesses letter to the lettersGuessed array
  lettersGuessed.push(letters);
  
  //then it will run the following functions
  updateGuessesLeft();
  updateGuessesSoFar();
  
  //checking if there is a match
  if (letters === lettersToGuess) {
    
    //if there is a winner, this will make it display in the HTML 
    wins++;
    document.querySelector("#userWins").innerHTML = wins;
    
    //this will then reset the game
    reset();
  }
  if (guessesLeft === 0) {
    
    //show the losses in the HTML
    losses++;
    document.querySelector("#userLosses").innerHTML = losses;
    
    //then reset the game again
    reset();
  }
  
};


//execute when the page loads
updateGuessesLeft();
updateLettersToGuess();