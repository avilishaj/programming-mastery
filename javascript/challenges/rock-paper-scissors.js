const choices = ["rock", "paper", "scissors"];

// we have a pre defined variable that we can change
var choice = "paper";

function shuffleChoices() {
  let randomNumber = Math.floor(Math.random() * 3);
  var computerChoice = choices[randomNumber];
  console.log(`Your Choice : ${choice}`);
  console.log(`Computer Choice : ${computerChoice}`);
  let text;

  if (choice === computerChoice) {
    text = "Result : We have a tie";
  }
  if (choice === "rock") {
    if (computerChoice === "paper") {
      text = "Result : You Lost";
    } else if (computerChoice === "scissors") {
      text = "Result : You Won";
    }
  } else if (choice === "paper") {
    if (computerChoice === "scissors") {
      text = "Result : You Lost";
    } else if (computerChoice === "rock") {
      text = "Result : You Won";
    }
  } else {
    if (computerChoice === "rock") {
      text = "You Won";
    } else if (computerChoice === "paper") {
      text = "You Lost";
    }
  }
  console.log(text);
}

shuffleChoices();
