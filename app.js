function play(playerChoice) {
  let computerChoice = "rock";

  if (playerChoice == computerChoice) {
    //player rock and computer rock = tie
    alert("It is a tie!");
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    //player paper and computer rock = player wins
    alert("Player wins!");
  } else {
    //player scissors and computer rock = computer wins
    alert("Computer wins!");
  }
}