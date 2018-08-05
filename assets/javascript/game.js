// ------- VARIABLES ------- 

// The almighty array of Earth's mightiest heroes/heroines
// Future plans to add a bonus section to see if user can guess the real identity of the superhero/heroine
var guessBank = [
    { d: "Batman", r: "Bruce Wayne", h: "DC Comic, Na na na na na theme!", i: "./assets/images/Batman.png" },
    { d: "Superman", r: "Clark Kent", h: "DC Comic, Farm boy from Kansas!", i: "./assets/images/Superman.png" },
    { d: "Wonder Woman", r: "Diana Prince", h: "DC Comic, Amazonian warrior!", i: "./assets/images/Wonder_Woman.jpg" },
    { d: "Aquaman", r: "Arthur Curry", h: "DC Comic, King of Atlantis and also can talk to fish!", i: "./assets/images/Aquaman.png" },
    { d: "The Flash", r: "Barry Allen", h: "DC Comic, Fastest Man Alive!", i: "./assets/images/The_Flash.jpg" },
    { d: "Green Lantern", r: "Hal Jordan", h: "DC Comic, Beware his Light!", i: "./assets/images/Green_Lantern_Hal_Jordan.jpg" },
    { d: "Martian Manhunter", r: "J'onn J'onzz", h: "DC Comic, Alien from Mars!", i: "./assets/images/Martian_Manhunter.png" },
    { d: "Green Arrow", r: "Oliver Queen", h: "DC Comic, Filthy rich Justice Leaguer who uses bow and arrows!", i: "./assets/images/Green_Arrow.jpg" },
    { d: "Black Canary", r: "Dinah Lance", h: "DC Comic, Heroine with a hell of a voice!", i: "./assets/images/Black_Canary.jpg" },
    { d: "Hawkman", r: "Katar Hol", h: "DC Comic, Has wings and a mace!", i: "./assets/images/Hawkman.jpg" },
    { d: "Zatanna", r: "Zatanna Zatara", h: "DC Comic, She loves Magic!", i: "./assets/images/Zatanna.png" },
    { d: "Captain America", r: "Steven Rogers", h: "Avengers, The True American Patriot!", i: "./assets/images/Captain_America.png" },
    { d: "Spider-Man", r: "Peter Parker", h: "Avengers, Friendly Neighborhood Spider Hero!", i: "./assets/images/Spider-Man.png" },
    { d: "Wolverine", r: "James Howlett", h: "Avengers/X-Men, He's the best at what does and what he does is not very nice!", i: "./assets/images/Wolverine.png" },
    { d: "Cyclops", r: "Scott Summers", h: "X-Men, Optic Blast!", i: "./assets/images/Cyclops.png" },
    { d: "Iron Man", r: "Anthony Stark", h: "Avengers, Genius. Billionaire. Playboy. Philanthropist.", i: "./assets/images/Iron_Man.png" },
    { d: "The Hulk", r: "Bruce Banner", h: "Avengers, RAARRGH SMASH!", i: "./assets/images/The_Hulk.png" },
    { d: "Thor", r: "Thor Odinson", h: "Avengers, BY ODIN'S BEARD!", i: "./assets/images/Thor.jpg" },
    { d: "Ant-Man", r: "Scott Lang", h: "Avengers, Size-changing hero who is a master thief with a heart of gold!", i: "./assets/images/Ant-Man.png" },
    { d: "Hawkeye", r: "Clinton Barton", h: "Avengers, Uses bow and arrow with near-perfect precision! Not bad for a deaf archer.", i: "./assets/images/Hawkeye.jpg" },
    { d: "Black Panther", r: "T'Challa", h: "Avengers, WAKANDA FOREVER!", i: "./assets/images/Black_Panther.png" },
    { d: "The Vision", r: "Victor Shade", h: "Avengers, Carries an Infinity Gem on his forehead!", i: "./assets/images/The_Vision.png" },
    { d: "Scarlet Witch", r: "Wanda Maximoff", h: "Avengers, Everything about her is Chaos!", i: "./assets/images/Scarlet_Witch.jpg" },
    { d: "Black Widow", r: "Natasha Romanoff", h: "Avengers, From Russia With Love ", i: "./assets/images/Black_Widow.png" },
    { d: "Captain Marvel", r: "Carol Danvers", h: "Avengers, a former US Air Force Pilot who is half-human/half-Kree!", i: "./assets/images/Captain_Marvel.png" },
    { d: "Falcon", r: "Samuel Wilson", h: "Avengers, Uses mechanical wings and has a bird sidekick!", i: "./assets/images/Falcon.jpg" },
    { d: "Wonder Man", r: "Simon Williams", h: "Avengers, Ionic hero who used to be a stunt man/actor. They call him Mr. Muscles!", i: "./assets/images/Wonder_Man.png" },
    { d: "Doctor Strange", r: "Stephen Strange", h: "Marvel, There can be only one Sorceror Supreme!", i: "./assets/images/Doctor_Strange.jpg" },
    { d: "Nova", r: "Richard Ryder", h: "Marvel, Part of a Corps of Cosmic Cops!", i: "./assets/images/Nova.jpg" },
    { d: "Storm", r: "Ororo Munroe", h: "X-Men, Considered a Godddes who can control the weather!", i: "./assets/images/Storm.png" },
    { d: "Professor X", r: "Charles Xavier", h: "X-Men, One of the Greatest Psychic Minds on the Planet!", i: "./assets/images/Professor_X.png" },
    { d: "Iceman", r: "Robert Drake", h: "X-Men, He's very cool! (Literally)", i: "./assets/images/Iceman.jpg" },
    { d: "Angel", r: "Warren Worthington", h: "X-Men, Looks like he came from Heaven!", i: "./assets/images/Angel.jpg" },
    { d: "Beast", r: "Henry McCoy", h: "X-Men, Blue, furry and smart!", i: "./assets/images/Beast.jpg" },
    { d: "Jean Grey", r: "Jean Grey", h: "X-Men, The Phoenix really likes this girl!", i: "./assets/images/Jean_Grey.png" },
    { d: "Nightcrawler", r: "Kurt Wagner", h: "X-Men, Fuzzy blue elf with a teleporting BAMF!", i: "./assets/images/Nightcrawler.png" },
    { d: "Colossus", r: "Piotr Rasputin", h: "X-Men, OSMIUM METAL SKIN!", i: "./assets/images/Colossus.jpg" },
    { d: "Rogue", r: "Anna Marie", h: "X-Men, She's untouchable!", i: "./assets/images/Rogue.png" },
    { d: "Shadowcat", r: "Katherine Pryde", h: "X-Men, Walls are no problem for this girl!", i: "./assets/images/Shadowcat.png" },
    { d: "Psylocke", r: "Elizabeth Braddock", h: "X-Men, Psychic Ninja!", i: "./assets/images/Psylocke.jpg" },
    { d: "Dazzler", r: "Alison Blaire", h: "X-Men, DAZZLING LIGHTS!", i: "./assets/images/Dazzler.jpg" },
    { d: "Gambit", r: "Remy LeBeau", h: "X-Men, The Ragin' Cajun!", i: "./assets/images/Gambit.jpg" },
    { d: "Jubilee", r: "Jubilation Lee", h: "X-Men, Mutant who later becomes a vampire!", i: "./assets/images/Jubilee.jpg" },
];

// We start the game with a score of 0.
var score = 0;

// Variable storing the number of strikes the player has left
var strikes = 10;

// Variable where each player's valid (only alphanumerical) guesses are pushed into this array and displayed on the page
var guesses = [];

// Variable that is used to determine if the game is in play or not
var gameContinue = 'y';

// Variable used to store the value of a randomized number between 0 and the (max array length - 1) of the guessBank array
var randomIndex;

// Used to store the randomly chosen hero/heroine name
var theChosen = "";

// Used to keep track if the same hero/heroine has been picked again
var theCurrentChosen = [];

// Variable used to convert the random hero/heroine name into underscores for text display purposes and also to keep track of the player's guesses
var sekretz = [];

// Variable used to convert theChosen into a string array in renderQuestion function
var answer = [];

// Used with answer variable, contents of answer array will be loaded into this string with joined blank spaces in between to be used for comparison to check win condition
var compareAnswer = "";

var heroImage = $("<img>");



// FUNCTIONS
// ==============================================================================

// Function to render the randomly chosen hero's/heroine's name as mysterious underscores.
// randomIndex is a randomly generated number between 0 and array length - 1 
// theChosen is assigned the hero name from the guessbank at the index of the number generated from randomIndex then the word is converted to all lowercase
function renderQuestion() {

    randomIndex = Math.floor(Math.random() * (guessBank.length));

    theChosen = guessBank[randomIndex].d;

    // If statement to prevent the same hero/heroine from being chosen again for next round
    // Condition check to see if the randonmly generated name assigned to theChosen variable is part of of the index of array tracker theCurrentChosen
    // Value greater than -1 indicates true, meaning value in theChosen is found in the array tracker
    //
    // The while loop condition check is the same as the if statement + length of array tracker is not the same length as the word guess back
    // During the while loop it'll keep reassigning a random number until the chosen hero's name is not in the array tracker
    if (theCurrentChosen.indexOf(theChosen) > -1) {
        while ((theCurrentChosen.indexOf(theChosen) > -1) && (theCurrentChosen.length != guessBank.length)) {
            randomIndex = Math.floor(Math.random() * (guessBank.length));
            theChosen = guessBank[randomIndex].d;
        }
        
    }
    
    theChosen = theChosen.toLowerCase();
    
    // Condition check if the array tracker gets large enough that its length is the same as the word guess bank, meaning no more new hero names to guess 
    // In this case the game is forced to end and prompts the user if they want to restart
    // If user selects yes then array tracker gets wipe clean and rest of the board gets reset, else just updates display thanking the user for playing
    if (theCurrentChosen.length === guessBank.length) {
        gameContinue = 'n';
        $("#display").html("You have guessed all the heroes/heroines in the guess bank!");
        var confirmContinue = confirm("You have guessed all the heroes/heroines in the guess bank! Restart?");
        
        if (confirmContinue === true) {
            gameContinue = 'y';

            theCurrentChosen = [];

            resetBoard();
            renderQuestion();
        }
        else {
            $("#display").html("Thanks for playing!");
        }
    }

    if (gameContinue === 'y') {
        for (i = 0; i < theChosen.length; i++) {

            // converts chosen name to underscore
            // if it encounters a space in the name, will add the space accordingly
            // same with a hypen in the name
            if (theChosen[i] === " ") {
                sekretz.push("\xa0");
                answer.push("\xa0");
            }
            else if (theChosen[i] === "-") {
                sekretz.push("-");
                answer.push(theChosen[i]);
            }
            else {
                sekretz.push("_");
                answer.push(theChosen[i]);
            }
        }

        $("#wordguess").html(sekretz.join(" "));
        compareAnswer = answer.join(" ");
        $("#hint").html("<b>Here's a hint:</b>  " + guessBank[randomIndex].h);
        heroImage.attr({ src: guessBank[randomIndex].i, height: "362", width: "auto" });    
        theCurrentChosen.push(guessBank[randomIndex].d);
    }
}

// Function that updates the HTML display for the score
function updateScore() {
    $("#score").html("<b>Score:</b> " + score);
}

// Function that updates the HTML display for the name being guessed
function updateDisplay() {
    $("#wordguess").html(sekretz.join(" "));
}


// Function that updates HTML display for the letters the player has guessed
function updateGuessed() {
    $("#guessed").html("<b>Letters You Guessed:</b> " + guesses);
}


// Function that updates the HTML display for the strikes left the player has
function updateStrikes() {
    $("#strikes").html("<b>Strikes Left:</b> " + strikes);
}


// Function when called, resets the game board display
// Strikes reset back to 10 with display updated for that
// Resets related global variables to empty out previous values to be used by renderQuestion to generate new word for next round
// Also blanks out the HTML elements for renderQuestion function to use later on
function resetBoard() {
    strikes = 10;
    updateStrikes();

    guesses = [];
    sekretz = [];
    answer = [];
    compareAnswer = "";

    updateGuessed();
    updateScore();

    $("#wordguess").html("");
    $("#display").html("");
    $(".right-side").html("");
}


// Function when called declaring the user had lost and asks if they want to play again
// if user hits OK then the game is back in play, score resets back to 0 then calls resetBoard and renderQuestion functions
// else game just ends
function newGame() {
    var confirmContinue = confirm("Game over! Do you want to play again?");

    if (confirmContinue === true) {
        gameContinue = 'y';
        score = 0;

        $(".left-side").css("border", "1px solid black");
        resetBoard();
        renderQuestion();
    }
    else
        gameContinue = 'n';
}


// Function when called will display a popup confirmation box asking if user wants to continue to next round or cancel
// If user hits OK then game continues, calls resetBoard and renderQuestion functions
// else just ends game
function continueGame() {
    var confirmContinue = confirm("Move onto next hero/heroine?");

    if (confirmContinue === true) {
        gameContinue = 'y';
        resetBoard();
        renderQuestion();
    }
    else {
        gameContinue = 'n';
        $("#display").html("Thanks for playing!");
    }

}


// Function to check the win condition, compares letters on display in HTML with the chosen name for the game round
// if it matches push congratulations message to HTML, adds a point to score then updates all displays then calls continueGame function
function checkWin() {
    var wordGuessBox = $("#wordguess").text();

    if (wordGuessBox === compareAnswer) {

        $("#display").html("Congratulations, you guessed the name!");
        $(".right-side").html(heroImage);
        score++;
        gameContinue = 'n';
        updateGuessed();
        updateStrikes();
        updateScore();
        setTimeout(continueGame, 1000);  // delays continueGame function by 1 sec to allow the HTML page to fully display the updated letters
        return;
    }
}


// Function to check the loss condition, if the strikes equals to 0 updates display and pushes out Game Over msg onto HTML page then calls newGame function
function checkLoss() {
    if (strikes === 0) {
        updateGuessed();
        $(".left-side").css("border", "5px solid red");
        $("#display").html("Game Over! The answer was '" + theChosen + "'.");
        gameContinue = 'n';
        setTimeout(newGame, 1000);  // delays checkLoss function by 1 sec to allow the HTML page to fully display the updated letters
        return;
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

    // Determine which key was pressed, turns it lowercase, and stores it into the userInput variable.
    var userInput = event.key.toLowerCase();

    // Variable used to detect the keycode (number associated with the key you pressed)
    var key = event.keyCode;

    // conditional check to see if the game is still in play
    if (gameContinue === 'y') {
        // conditional to make sure the key you pressed is accepted for guessing ('a' and 'A' both share the same keycode 65 for example, same with 'z' and 'Z' being keycode 90)
        if (key >= 65 && key <= 90) {

            // conditional check that compares the userinput with each letter of theChosen array
            // if no letter matched, indexOf value will be -1, it will enter the If statement below, takes away 1 from remaining strikes
            // while pushing your current guessed letter to the guess array for record keeping and display
            if (theChosen.indexOf(userInput) < 0) {
                strikes--;

                // Checks user's input in the array of guesses box
                // If the guessed letter is not found in array, pushes the letter into the guesses box and updates info display to let user know they made a wrong guess
                // Else condition used to catch situation when user attempts to press same letter key already guessed, should not duplicate letter into guesses box repeatedly
                if (guesses.indexOf(userInput) < 0) {
                    guesses.push(userInput);
                    $("#display").html(userInput + " is not found in the word, removed 1 strike from total!");
                } else {
                    $("#display").html("Warning! You pressed '" + userInput + "' which you already have guessed before.");
                }

                updateGuessed();
                updateStrikes();
            }
            else {
                // Loops entire length of chosen name to compare each letter in index
                // if guessed letter matches, updates the word guessing display to replace the underscore with the correctly guessed letter
                // also updates letters guessed box with user's current guess
                for (i = 0; i < theChosen.length; i++) {
                    if (theChosen[i] === userInput) {
                        sekretz[i] = userInput;
                        updateDisplay();
                    }
                }

                // Checks user's input in the array of guesses box
                // If the guessed letter is not found in array, pushes the letter into the guesses box and updates info display to let user know they made a correct letter guess
                // Else condition used to catch situation when user attempts to press same letter key already guessed, should not duplicate letter into guesses box repeatedly
                if (guesses.indexOf(userInput) < 0) {
                    guesses.push(userInput);
                    $("#display").html("Good job! You guessed a letter correctly!");
                } else {
                    $("#display").html("Warning! You pressed '" + userInput + "' which you already have guessed before.");
                }

                updateDisplay();
                updateGuessed();
                checkWin();
            }
        }
        else
            $("#display").html("Warning! You pressed '" + userInput + "' which is an invalid key.");
    }

    checkLoss();

};

