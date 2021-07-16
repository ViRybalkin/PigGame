'use strict';

const score1 = document.querySelector('#current--0');
const score2 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let currentScore = 0;

diceEl.classList.add('hidden');
score1.textContent = 0;
score2.textContent = 0;

btnRoll.addEventListener('click', () => {
  const dice = Math.floor(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    score1.textContent = currentScore;
  } else {
  }
});
