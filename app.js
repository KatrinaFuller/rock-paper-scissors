let playerScore = 0;
let computerScore = 0;



function play(playerChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice)

  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      //player rock & computer rock = tie
      alert("It is a tie! No one gets a point.");
    } else if (computerChoice == "paper") {
      //player rock & computer paper = computer wins
      alert("Computer chose paper. Computer wins!");
      // Increment Computer counter
      computerScore++;
      // update the HTML to show the new score
      updateComputerScore();
    } else {
      //player rock & computer scissors = player wins
      alert("Player wins!");
      // Increment Player Counter
      playerScore++;
      // update the HTML to show the new score
      updatePlayerScore();
    };
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      //player paper & computer rock = player wins
      alert("Player wins!");
      // Increment Player Counter
      playerScore++;
      // update the HTML to show the new score
      updatePlayerScore();
    } else if (computerChoice == "paper") {
      //player paper & computer paper = tie
      alert("It is a tie! No one gets a point.");
    } else {
      //player paper & computer scissors = computer wins
      alert("Computer chose scissors. Computer wins!");
      // Increment Computer counter
      computerScore++;
      // update the HTML to show the new score
      updateComputerScore();
    }
  } else {
    //player scissors
    if (computerChoice == "rock") {
      //player scissors & computer rock = computer wins
      alert("Computer chose rock. Computer wins!");
      // Increment Computer counter
      computerScore++;
      // update the HTML to show the new score
      updateComputerScore();
    } else if (computerChoice == "paper") {
      //player scissors & computer paper = player wins
      alert("Player wins!");
      // Increment Player Counter
      playerScore++;
      // update the HTML to show the new score
      updatePlayerScore();
    } else {
      //player scissors & computer scissors = tie
      alert("It is a tie! No one gets a point.");
    }
  }

  gameOver();
};

function updatePlayerScore() {
  let playerScoreElement = document.querySelector("#player-score");
  playerScoreElement.textContent = "Player Score: " + playerScore.toString();
};

function updateComputerScore() {
  let computerScoreElement = document.querySelector("#computer-score");
  computerScoreElement.textContent = "Computer Score: " + computerScore.toString();
};

function resetGame() {
  if (confirm("Are you sure you want to restart this game?")) {
    playerScore = 0;
    computerScore = 0;
    updatePlayerScore();
    updateComputerScore();
  }
}

function gameOver() {
  if (playerScore == 5) {
    alert("GAME OVER! Congrats, you won!");
    resetGame();
  } else if (computerScore == 5) {
    alert("GAME OVER! Sorry, you lost.");
    resetGame();
  }
}