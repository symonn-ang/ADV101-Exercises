import promp from "./promp.js";
import data from "./data.js";

/* Get one random word from data */
const word = data[Math.floor(Math.random() * data.length)];
const hangmanGame = "HANGMAN";
let hangmanHolder = "";

async function runGame () {
    for (let i = 0; i < word.word.length; i++) {
        const answer =  await promp(`${word.question} `);
        hangmanHolder += hangmanGame[i]
        
        if (answer.toLowerCase() !== word.word) {
            console.log(hangmanHolder)

            if (i === hangmanGame.length - 2) {
                console.log()
                console.log(`Hint: ${word.hint}`)
                console.log()
                const answer =  await promp(`${word.question} `);

                if (answer.toLowerCase() !== word.word) {
                    console.log(hangmanGame)
                    console.log(`┬─┬─┬─┬ノ(ಠ_ಠノ)`)
                    return console.log(`Game over! The word was: ${word.word}`);

                }
                
            }
            
            } else {
                console.log("Congratulations! You've guessed the word correctly.");
                return;
            }
            
    }

    return runGame();
}



runGame();