'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secredNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚭No number!';
    displayMessage('🚭No number!');
    // When player wins
  } else if (guess === secredNumber) {
    // document.querySelector('.message').textContent = 'Correct number!💪';
    displayMessage('Correct number!💪');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secredNumber;

    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }

    //When guess is wrong
  } else if (guess !== secredNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secredNumber ? 'Too hight!📈' : 'Too low!📉';
      displayMessage(guess > secredNumber ? 'Too hight!📈' : 'Too low!📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost game ⚓';
      displayMessage('You lost game ⚓');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   //When guess is too high
//   else if (guess > secredNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too hight!📈';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost game ⚓';
//       document.querySelector('.score').textContent = 0;
//     }
//     //When guess is too low
//   } else if (guess < secredNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low!📉';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost game ⚓';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secredNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
