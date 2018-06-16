// ------- VARIABLES ------- 

// The almighty array of Earth's mightiest heroes/heroines
var guessBank = [
    { d: "Batman", r: "Bruce Wayne" },
    { d: "Superman", r: "Clark Kent" },
    { d: "Wonder Woman", r: "Diana Prince" },
    { d: "Aquaman", r: "Arthur Curry" },
    { d: "The Flash", r: "Barry Allen" },
    { d: "Green Lantern", r: "Hal Jordan" },
    { d: "Martian Manhunter", r: "J'onn J'onzz" },
    { d: "Green Arrow", r: "Oliver Queen" },
    { d: "Black Canary", r: "Dinah Lance" },
    { d: "Hawkman", r: "Katar Hol" },
    { d: "Zatanna", r: "Zatanna Zatara" },
    { d: "Captain America", r: "Steven Rogers" },
    { d: "Spider-Man", r: "Peter Parker" },
    { d: "Wolverine", r: "James Howlett" },
    { d: "Cyclops", r: "Scott Summers" },
    { d: "Iron Man", r: "Anthony Stark" },
    { d: "The Hulk", r: "Bruce Banner" },
    { d: "Thor", r: "Thor Odinson" },
    { d: "Ant-Man", r: "Scott Lang" },
    { d: "Hawkeye", r: "Clinton Barton" },
    { d: "Black Panther", r: "T'Challa" },
    { d: "The Vision", r: "Victor Shade" },
    { d: "Scarlet Witch", r: "Wanda Maximoff" },
    { d: "Hercules", r: "Heracles" },
    { d: "Black Knight", r: "Dane Whitman" },
    { d: "Black Widow", r: "Natasha Romanoff" },
    { d: "Captain Marvel", r: "Carol Danvers" },
    { d: "Falcon", r: "Samuel Wilson" },
    { d: "Wonder Man", r: "Simon Williams" },
    { d: "Doctor Strange", r: "Stephen Strange" },
    { d: "Nova", r: "Richard Ryder" },
    { d: "Storm", r: "Ororo Munroe" },
    { d: "Professor X", r: "Charles Xavier" },
    { d: "Iceman", r: "Robert Drake" },
    { d: "Angel", r: "Warren Worthington" },
    { d: "Beast", r: "Henry McCoy" },
    { d: "Marvel Girl", r: "Jean Grey" },
    { d: "Nightcrawler", r: "Kurt Wagner" },
    { d: "Colossus", r: "Piotr Rasputin" },
    { d: "Rogue", r: "Anna Marie" },
    { d: "Shadowcat", r: "Katherine Pryde" },
    { d: "Magneto", r: "Max Eisenhardt" },
    { d: "Psylocke", r: "Elizabeth Braddock" },
    { d: "Dazzler", r: "Alison Blaire" },
    { d: "Gambit", r: "Remy LeBeau" },
    { d: "Jubilee", r: "Jubilation Lee" },
];

// We start the game with a score of 0.
var score = 0;

// Variable storing the number of strikes the player has left
var strikes = 10;

// Variable where each player's valid (only alphanumerical) guesses are pushed into this array and displayed on the page
var guesses = [];

var gameContinue = 'y';

// Variable used to store the value of a randomized number between 0 and the (max array length - 1) of the guessBank array
var randomIndex;

// Used to store the randomly chosen hero/heroine name
var theChosen;

// Variable used to convert the random hero/heroine name into underscores for text display purposes and also to keep track of the player's guesses
var sekretz = [];



// FUNCTIONS
// ==============================================================================

// Function to render the randomly chosen hero's/heroine's name as mysterious underscores.
function renderQuestion() {

    // randomIndex assigned a randomized value between 0 max array length - 1 (which is 46 -1)
    randomIndex = Math.floor(Math.random() * (guessBank.length - 1));
    console.log("randomIndex: " + randomIndex);

    console.log("gameContinue value:  " + gameContinue);

    console.log("guessBank[randomIndex]:  " + guessBank[randomIndex]);
    theChosen = guessBank[randomIndex].d;
    console.log("theChosen value:  " + theChosen);

    theChosen = theChosen.toLowerCase();
    console.log("theChosen value:  " + theChosen);

    if (gameContinue === 'y') {
        console.log("Doing the loop");

        console.log("Length of theChosen:  " + theChosen.length);

        for (i = 0; i < theChosen.length; i++) {
            console.log(theChosen[i]);
            if (theChosen[i] === ' ')
                sekretz.push("&nbsp;");
            else if (theChosen[i] === '-')
                sekretz.push("-");
            else
                sekretz.push("_");
        }

        document.querySelector("#question").innerHTML = sekretz.join(" ");


    }

    console.log("sekretz var:  " + sekretz);

    // // If there are still more questions, render the next one.
    // if (wordBankIndex <= (guessBank.length - 1)) {
    //     document.querySelector("#question").innerHTML = guessBank[wordBankIndex].q;
    // }
    // // If there aren't, render the end game screen.
    // else {
    //     document.querySelector("#question").innerHTML = "Game Over!";
    //     document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + guessBank.length;
    // }
}

// Function that updates the score
function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
}

// Function that updates the name being guessed
function updateDisplay() {
    document.querySelector("#question").innerHTML = sekretz.join(" ");
}

// Function that displays the alphanumeric letters the players guessed
function updateGuessed() {
    document.querySelector("#guessed").innerHTML = "Letters You Guessed: " + guesses;
}

function updateStrikes() {
    document.querySelector("#strikes").innerHTML = "Strikes Left: " + strikes;
}


// MAIN PROCESS
// ==============================================================================

// Calling functions to start the game.
renderQuestion();
updateGuessed();
updateStrikes();
updateScore();

// When the user presses a key, it will run the following function...
document.onkeyup = function (event) {


    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = event.key.toLowerCase();
    console.log("You pressed:  " + userInput);

    var key = event.keyCode;
    console.log("The keycode for " + userInput + " is " + key + ".");

    console.log("You have " + strikes + " strikes left.");


    if (key >= 65 && key <= 90) {
        console.log("Entering conditional for keyboard between 65 and 90");

        if (theChosen.indexOf(userInput) < 0) {
            console.log("Entering bad guess conditional");

            strikes--;
            guesses.push(userInput);
            updateStrikes();
            updateGuessed();

        }
        else {

            console.log("Entering else conditional correct letter guessed");


            for (i = 0; i < theChosen.length; i++) {
                console.log(theChosen[i]);
                if (theChosen[i] === userInput) {
                    console.log("Comparing:");
                    console.log("theChosen[" + i + "]:  " + theChosen[i]);
                    console.log("userInput:     " + userInput);
                    sekretz[i] = userInput;

                    updateDisplay();
                }

            }
            guesses.push(userInput);
            updateGuessed();

        }
    }
    else
        document.querySelector("#display").innerHTML = "Warning! You pressed -" + userInput + "- which is an invalid key";

    if (strikes === 0) {
        document.querySelector("#question").innerHTML = "Game Over!";
        return;
    }

    if (sekretz.indexOf("_") < 0) {
        console.log(sekretz.indexOf("_"));
        score++;
        updateScore();

        document.querySelector("#display").innerHTML = "Congratulations, you guessed the name!";
    }


};