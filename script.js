'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '👏 Correct Number!!!';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);  */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    console.log(document.querySelector('.message').textContent);

    document.querySelector('.message').textContent = ' No Number ⛔';

    //when player wins!!!
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👏 Correct Number!!!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#00ff00';
    document.querySelector('.number').style.width = '30rem';

    //when guess is too high!!!
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high ⬆⬆⬆';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.body.style.backgroundColor = 'red';
      document.querySelector('.message').textContent =
        ' 💥YOU LOST THE GAME...';
      //document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low!!!
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low ⬇⬇⬇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.body.style.backgroundColor = 'red';
      document.querySelector('.message').textContent =
        ' 💥YOU LOST THE GAME...';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//when hit again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //arxikopoioume ta panta
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  score = 5;
});
