#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:"
    },
]);

if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
} else {
    console.log("Awww! You guessed wrong number. Would you like to guess again?");
}