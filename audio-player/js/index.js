const wrapper = document.querySelector('.wrapper'),
fullScreenCover = document.querySelector('.fullscreen-cover'),
coverImg = wrapper.querySelector('.img-area img'),
audioName = wrapper.querySelector('.song-details .songname'),
audioArtist = wrapper.querySelector('.song-details .artist'),
mainAudio = wrapper.querySelector('.main-audio'),
playPauseButton = wrapper.querySelector('.play-pause');



let audioIndex = 1;

// Вызов функции загрузки музыки после загрузки страницы

window.addEventListener('load', () => {
    loadAudio(audioIndex);
});

// Функция загрузки музыки

function loadAudio(indexNumb) {
    audioName.innerText = playlist[indexNumb - 1].songname;
    audioArtist.innerText = playlist[indexNumb - 1].artist;
    fullScreenCover.src = `assets/img/${playlist[indexNumb - 1].img}.jpg`;
    coverImg.src = `assets/img/${playlist[indexNumb - 1].img}.jpg`;
    mainAudio.src = `assets/music/${playlist[indexNumb - 1].src}.mp3`;
};

// Проигрывание и остановка звука нажатием на кнопку

function playAudio() {
    wrapper.classList.add('pause');
    playPauseButton.src = './assets/svg/pause.svg';
    mainAudio.play();
};

function pauseAudio() {
    wrapper.classList.remove('pause');
    playPauseButton.src = './assets/svg/play.svg';
    mainAudio.pause();
};

playPauseButton.addEventListener('click', () => {
    const isPaused = wrapper.classList.contains('pause');
    isPaused ? pauseAudio() : playAudio();
});