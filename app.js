function play(playerChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice)

  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      //player rock & computer rock = tie
      alert("It is a tie!");
    } else if (computerChoice == "paper") {
      //player rock & computer paper = computer wins
      alert("Computer wins!");
    } else {
      //player rock & computer scissors = player wins
      alert("Player wins!");
    };
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      //player paper & computer rock = player wins
      alert("Player wins!");
    } else if (computerChoice == "paper") {
      //player paper & computer paper = tie
      alert("It is a tie!");
    } else {
      //player paper & computer scissors = computer wins
      alert("Computer wins!");
    }
  } else {
    //player scissors
    if (computerChoice == "rock") {
      //player scissors & computer rock = computer wins
      alert("Computer wins");
    } else if (computerChoice == "paper") {
      //player scissors & computer paper = player wins
      alert("Player wins!");
    } else {
      //player scissors & computer scissors = tie
      alert("It is a tie!");
    }
  }
}