let player = {
  name: `Jon`,
  chips: 100,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(`#sum-el`);
let cardsEl = document.querySelector(`#cards-el`);
let newCardEl = document.querySelector(`#newCard-el`);

let playerEl = document.getElementById(`player-el`);

playerEl.textContent = player.name + `: $` + player.chips;

console.log(cards);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: `;
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ` `;
  }
  sumEl.textContent = `Sum: ` + sum;
  if (sum <= 20) {
    message = `Do you want to draw a new card?`;
  } else if (sum === 21) {
    hasBlackJack = true;
    message = `You've got BlackJack`;
  } else {
    isAlive = false;
    message = `You're out`;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card; //aka sum = sum+card
    renderGame();
  }
}
