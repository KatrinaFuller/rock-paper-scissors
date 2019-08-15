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
      alert("Computer wins!");
      // Increment Computer counter
      computerScore++;
      // update the HTML to show the new score
      let computerScoreElement = document.querySelector("#computer-score");
      computerScoreElement.textContent = "Computer Score: " + computerScore.toString();
    } else {
      //player rock & computer scissors = player wins
      alert("Player wins!");
      // Increment Player Counter
      playerScore++;
      // update the HTML to show the new score
      let playerScoreElement = document.querySelector("#player-score");
      playerScoreElement.textContent = "Player Score: " + playerScore.toString();
    };
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      //player paper & computer rock = player wins
      alert("Player wins!");
      // Increment Player Counter
      playerScore++;
      // update the HTML to show the new score
      let playerScoreElement = document.querySelector("#player-score");
      playerScoreElement.textContent = "Player Score: " + playerScore.toString();
    } else if (computerChoice == "paper") {
      //player paper & computer paper = tie
      alert("It is a tie! No one gets a point.");
    } else {
      //player paper & computer scissors = computer wins
      alert("Computer wins!");
      // Increment Computer counter
      computerScore++;
      // update the HTML to show the new score
      let computerScoreElement = document.querySelector("#computer-score");
      computerScoreElement.textContent = "Computer Score: " + computerScore.toString();
    }
  } else {
    //player scissors
    if (computerChoice == "rock") {
      //player scissors & computer rock = computer wins
      alert("Computer wins!");
      // Increment Computer counter
      computerScore++;
      // update the HTML to show the new score
      let computerScoreElement = document.querySelector("#computer-score");
      computerScoreElement.textContent = "Computer Score: " + computerScore.toString();
    } else if (computerChoice == "paper") {
      //player scissors & computer paper = player wins
      alert("Player wins!");
      // Increment Player Counter
      playerScore++;
      // update the HTML to show the new score
      let playerScoreElement = document.querySelector("#player-score");
      playerScoreElement.textContent = "Player Score: " + playerScore.toString();
    } else {
      //player scissors & computer scissors = tie
      alert("It is a tie! No one gets a point.");
    }
  }
}