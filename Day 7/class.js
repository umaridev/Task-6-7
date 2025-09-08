function numberGuessingGame() {
    let playAgain;
    
    // Do-while loop to ask the user if they want to play again
    do {
        // Generate a random number between 1 and 50
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        let guess;
        let attempts = 0;
        const maxAttempts = 5;

        console.log("Guess the number between 1 and 50. You have 5 attempts.");

        // For loop to limit the user to 5 attempts
        for (let i = 1; i <= maxAttempts; i++) {
            guess = parseInt(prompt(`Attempt ${i}/${maxAttempts}: Enter your guess:`));
            attempts++;

            if (guess < randomNumber) {
                console.log("Too low! Try again.");
            } else if (guess > randomNumber) {
                console.log("Too high! Try again.");
            } else if (guess === randomNumber) {
                console.log(`Correct! You guessed it in ${attempts} attempts.`);
                break; // Exit the loop if the guess is correct
            }
        }

        // Check if the user ran out of attempts
        if (guess !== randomNumber) {
            console.log(`Sorry, you've run out of attempts. The number was ${randomNumber}.`);
        }

        // Use a while loop to keep asking if the user wants to play again until a valid response is given
        let invalidInput = true;
        while (invalidInput) {
            playAgain = prompt("Do you want to play again? (yes/no):").toLowerCase();
            if (playAgain === "yes" || playAgain === "no") {
                invalidInput = false;
            } else {
                console.log("Invalid input. Please type 'yes' or 'no'.");
            }
        }

    } while (playAgain === "yes");

    console.log("Thanks for playing!");
}

// Call the function to start the game
numberGuessingGame();