'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No number');

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage(' Correct Number!!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too Low' : 'Too High');
      score--;
      document.querySelector('.score').textContent = score;

      // When player loses the game
    } else {
      displayMessage('YOU LOST THE GAME');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too Low') ;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('YOU LOST THE GAME') ;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
