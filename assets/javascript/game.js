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
}

// Function that updates the score
function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
}

// Function that updates the name being guessed
function updateDisplay() {
    document.querySelector("#question").innerHTML = sekretz.join(" ");
}

// Function that displays the letters the player has guessed
function updateGuessed() {
    document.querySelector("#guessed").innerHTML = "Letters You Guessed: " + guesses;
}

function updateStrikes() {
    document.querySelector("#strikes").innerHTML = "Strikes Left: " + strikes;
}

function resetBoard() {
    console.log("resetBoard function being called");
    //resetting strikes back to 10
    strikes = 10;
    updateStrikes();

    // resetting guesses and sekretz array back to empty
    guesses = [];
    sekretz = [];

    updateGuessed();

    updateScore();
    document.querySelector("#question").innerHTML = "";
    document.querySelector("#display").innerHTML = "";

}

function newGame() {
    var confirmContinue = confirm("Game over! Do you want to play again?");

    console.log("confirmCOntinue value is:  " + confirmContinue);

    if (confirmContinue === true)
    {
        console.log("entering true condition for newgame");
        gameContinue = 'y';
        score = 0;
        resetBoard();
        console.log("score set to:  " + score);
        renderQuestion();
    }
    else
    {
        console.log("entering false condition for newgame");
        gameContinue = 'n';
    }

}

function continueGame() {
    var confirmContinue = confirm("Move onto next hero/heroine?");

    console.log("confirmCOntinue value is:  " + confirmContinue);

    if (confirmContinue === true)
    {
        console.log("entering true condition for continuegame");
        gameContinue = 'y';
        resetBoard();
        renderQuestion();
    }
    else
    {
        console.log("entering false condition for continuegame");
        gameContinue = 'n';
    }

}


// MAIN PROCESS
// ==============================================================================

// Calling functions to start the game.
renderQuestion();
updateGuessed();
updateStrikes();
updateScore();

// When the user presses a key, it will run the following function
document.onkeyup = function (event) {


    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = event.key.toLowerCase();
    console.log("You pressed:  " + userInput);

    // Variable used to detect the keycode (number associated with the key you press down)
    var key = event.keyCode;
    console.log("The keycode for " + userInput + " is " + key + ".");

    console.log("You have " + strikes + " strikes left.");

    if (gameContinue === 'y') {
        // conditional to make sure the key you pressed is accepted for guessing ('a' and 'A' both share the same keycode 65 for example, same with 'z' and 'Z' being keycode 90)
        if (key >= 65 && key <= 90) {
            console.log("Entering conditional for keyboard key between 65 and 90");

            // conditional check that compares the userinput with each letter of theChosen array
            // if no letter matched, indexOf value will be -1, enters If statement below, takes away 1 from remaining strikes while push your current guessed letter to the guess array for record keeping
            if (theChosen.indexOf(userInput) < 0) {
                console.log("Entering bad guess conditional");

                strikes--;
                guesses.push(userInput);
                updateStrikes();
                updateGuessed();

            }
            else {

                console.log("Entering else conditional, correct letter guessed");

                // Loops entire length of chosen name to compare each letter in index
                // if letter matched, updates the word guessing display to replace the underscore with the correctly guessed letter
                // also updates letters guessed box with your current guess
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
            document.querySelector("#display").innerHTML = "Warning! You pressed '" + userInput + "' which is an invalid key";
    }

    if (strikes === 0) {
        updateGuessed();
        document.querySelector("#question").innerHTML = "Game Over!";
        gameContinue = 'n';
        newGame();
    }
    
    if (sekretz.indexOf("_") < 0) {
        console.log(sekretz.indexOf("_"));
        score++;
        updateGuessed();
        updateStrikes();
        updateScore();
        document.querySelector("#display").innerHTML = "Congratulations, you guessed the name!";
        continueGame();
    }

};

