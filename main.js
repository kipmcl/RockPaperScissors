 var getUserChoice = function (userInput = 'rock') {

    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        console.log(userInput);
        return userInput;
    } else if (userInput != 'rock' || userInput != 'paper' || userInput != 'scissors') {
        console.log('Please choose rock, paper, or scissors');
    } return userInput;
       };
       
  getUserChoice();
  

   var getComputerChoice = function () {
    computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
          console.log('rock');
    } else if (computerInput === 1) {
         console.log('paper');
    } else if (computerInput === 2) {
         console.log('scissors');
    }
    };

  getComputerChoice();

var determineWinner = function (userChoice, computerChoice) {
   
    if (userChoice === 'rock' && computerChoice === 0) {
        console.log('The Game Is A Tie!');
    } else if (userChoice === 'rock' && computerChoice === 1) {
        console.log('The Computer Won!');
    } else if (userChoice === 'rock' && computerChoice === 2) {
        console.log('The Human Wins!');
    } else if (userChoice === 'paper' && computerChoice === 2) {
        console.log('The Computer Won');
    } else if (userChoice === 'paper' && computerChoice === 0) {
        console.log('The Human Wins!');
    } else if (userChoice === 'scissors' && computerChoice === 0) {
        console.log('The Computer Won');
    } else if (userChoice === 'scissors' && computerChoice === 2) {
        console.log('The Human Wins!');
    } 

};

determineWinner('rock', computerInput);

var playGame = function () {
userChoice = getUserChoice('rock');

computerChoice = getComputerChoice();

//console.log(userChoice);
//console.log(computerChoice);

};

playGame();



