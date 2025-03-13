// function to roll the dice
function rollDice() {
  var dice = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6
  var imagePath = "images/dice_no" + dice + ".webp"; // images/dice_no1.webp

  console.log("image path: ", imagePath); // log the image
  document.getElementById("dice").src = imagePath; // change the image
}
