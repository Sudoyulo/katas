let prompt = require("prompt-sync")();

let bullseye = Date.now() % 100;
let guessed = [];
let losing = true;

while (losing) {
  let answer = prompt("Guess a number: ");
  if (Number(answer) === bullseye) {
    console.log(
      "That's correct! You answered in " + guessed.length + " guesses!"
    );
    losing = false;
    break;
  } else if (guessed.includes(answer)) {
    console.log("Youve already guessed " + answer);
  } else {
    if (answer > bullseye) {
      console.log("Too high!");
    } else {
      console.log("Too low!");
    }
    guessed.push(answer);
  }
}
