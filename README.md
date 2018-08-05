# Week 3 JavaScript Assignment - Option Two: Word Guess Game (Challenge - Recommended)

### Overview

My homework assignment where I am to create one of two possible computer games: Word Guess or Psychic. These apps will run in the browser, and feature dynamically updated HTML and CSS powered by your JavaScript code. I picked the harder challenge of doing a hangman-type game.

### What The Project Does

* On load the game will randomly pick a hero's/heroine's name from a large array bank for the user to guess.
* The game will accept letter input from the keyboard from the user while the user is attempting to guess the letters in the mystery hero's name.
* For every wrong letter guessed, the game will remove a strike from the total remaining strikes available. Once that is reduced to 0 then the game is over.
* If the user manages to guess the hero's name correctly, the user is given a point in the score and is prompted to continue the game with the next mystery hero or canceling out to end the game.

### Technology Used In The Creation Of This Project

* HTML
* Bootstrap
* CSS
* Javascript
* jQuery
* Google Fonts

### Project Logic Flow
1. Upon browser load, a number is randomly generated between 0 and the length of the word guess bank array.
  * Based on that number, the hero's names is assigned to a global variable to keep track of it while the game is in play.
  * If the hero's name hasn't been picked before (checked with a condition check statement comparing to another variable that is tracking all hero names that have been in play before), the nero's name will be converted to have the letters replaced with underscores.
  * Game is put into play now.
2. Once game is in play, the game will listen for onkeyup events to identify which letters on the keyboard the user hits.
  * If the key pressed is valid (between a-z/A-Z) then the game will check and compare the user's guess against the mystery hero's name.
    * If the letter matches any letters in the mystery hero's name, that letter will be revealed to the user.
    * If the letter does not match, the user has a strike removed from their total strikes pool.
  * In all cases, the letter will be added to a box for display to show what the user has guessed
    * If the user attempts to press the same key again that's been guessed before, game will display a warning about it
    * It will not count against the user's strikes if the user attempts to repeatedly press the same key that exists or not exists in the mystery hero's name after the first check
  * Each time the user correctly guesses the letter, the game will check the win condition, comparing the current letters displayed with the chosen mystery hero's name
3. Once the player guess the hero's name, a pop up confirmation window will ask if the user wants to continue playing or not.
  * If the user hits yes/Enter key, the game awaards the user 1 point in the score then moves back to step 1 + resetting the board.
  * If the user hits no, the game will stop.
4. If the player runs out of strikes before guessing the hero's name, the will pop up a confirmation window asking if the user wants to restart the game.
  * If the user hits yes/Enter key, the game moves back to step 1 + resetting the board.
  * If the user hits no, the game will stop.

### Deployed Link
[GitHub Deployed Link](https://teknoma104.github.io/Word-Guess-Game/)