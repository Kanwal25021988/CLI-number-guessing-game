#! /usr/bin/env node
//run command
//npm init (to create package.json)
//changes in package.json
//to create tsconfiguration (tsc --init)
//changes in ts configuration
//install inquirer(npm i inquirer)


import inquirer from "inquirer";

console.log("\n\Welcome to CLI-number-guessing\n");

const randomNumber = Math.floor(Math.random() *5 + 1);

const answer = await inquirer.prompt([
    {
        name:"userGuessnumber",
        type:"number",
        message:"Enter your guess number(Number Limit from 1 to 5):",
    }
]);

if (answer.userGuessnumber === randomNumber){
    console.log("Congratulation! You guessed the right number");
}
else{
    console.log("Sorry, You guessed the wrong number");
}

