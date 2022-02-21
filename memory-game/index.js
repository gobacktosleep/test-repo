const cards = document.querySelectorAll('.memory-card');
const moves = document.querySelector('.flips span');
const restartBtn = document.querySelector('.restart');

let flips = 0;
let hasFlippedCard = false;
let lockBoard = false;
let cardOne, cardTwo;

function flipCard() {
    if (lockBoard) return;
    if (this === cardOne) return;
    this.classList.add('flip');
    flips++;
    moves.innerText = flips;

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        cardOne = this;
        return;
    }
        cardTwo = this;
        checkForMatch();
}

function checkForMatch() {
    let isMatch = cardOne.dataset.cards === cardTwo.dataset.cards;
    isMatch ? pairedCards() : unpairedCards();
}

function pairedCards() {
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);

    resetBoard();
}

function unpairedCards() {
    lockBoard = true;
    setTimeout(() => {
    cardOne.classList.remove('flip');
    cardTwo.classList.remove('flip');
    
    resetBoard();
    }, 1200);
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    cardOne = '';
    cardTwo = '';
}

function shuffle() {
    flips = 0;
    moves.innerText = flips;
    let randomPos = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    randomPos.sort(() => Math.floor(Math.random() > 0.5 ? 1 : -1));
    cards.forEach((card, index) => {
        card.classList.remove('flip');
        card.style.order = randomPos[index];
        card.addEventListener('click', flipCard);
    });
};

shuffle();
restartBtn.addEventListener('click', shuffle);
cards.forEach(card => card.addEventListener('click', flipCard));