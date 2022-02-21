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

console.log(` [60/70]
[+] 1. Вёрстка +10
 - реализован интерфейс игры +5
 - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5

[+] 2. Логика игры. Карточки, по которым кликнул игрок, переворачиваются согласно правилам игры +10

[+] 3. Игра завершается, когда открыты все карточки +10

[+] 4. По окончанию игры выводится её результат - количество ходов, которые понадобились для завершения игры +10

[-] 5. Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр
(примечание: игра не доделана, не смогла разобраться с local storage, буду доделывать позже)

[+] 6. По клику на карточку – она переворачивается плавно, если пара не совпадает – обе карточки так же плавно переварачиваются рубашкой вверх +10

[+] 7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо`)