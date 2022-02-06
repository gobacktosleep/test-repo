const wrapper = document.querySelector('.wrapper'),
fullScreenCover = document.querySelector('.fullscreen-cover'),
coverImg = wrapper.querySelector('.img-area img'),
audioName = wrapper.querySelector('.song-details .songname'),
audioArtist = wrapper.querySelector('.song-details .artist'),
mainAudio = wrapper.querySelector('.main-audio'),
playPauseButton = wrapper.querySelector('.play-pause'),
prevButton = wrapper.querySelector('.prev'),
nextButton = wrapper.querySelector('.next'),
progressBar = wrapper.querySelector('.progress-bar'),
progressArea = wrapper.querySelector('.progress-area'),
volumeButton = wrapper.querySelector('.volume'),
volumeSlider = wrapper.querySelector('.volume-slider');


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

// Пролистывание кликами по кнопкам prev/next

function prevAudio() {
    audioIndex--;
    audioIndex < 1 ? audioIndex = playlist.length : audioIndex = audioIndex;
    loadAudio(audioIndex);
    playAudio();
};

prevButton.addEventListener('click', () => {
    prevAudio();
});

function nextAudio() {
    audioIndex++;
    audioIndex > playlist.length ? audioIndex = 1 : audioIndex = audioIndex;
    loadAudio(audioIndex);
    playAudio();
};

nextButton.addEventListener('click', () => {
    nextAudio();
});

// Таймер прогрессбара

mainAudio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let audioCurrentTime = wrapper.querySelector('.current'),
    audioDuration = wrapper.querySelector('.duration');

    mainAudio.addEventListener('loadeddata', () => {
        let musicDuration = mainAudio.duration;
        let totalMin = Math.floor(musicDuration / 60);
        let totalSec = Math.floor(musicDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        };
        audioDuration.innerText = `${totalMin}:${totalSec}`;
    });

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    };
    audioCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// Активный прогрессбар с возможностью вручную перемещать ползунок

progressArea.addEventListener('click', (e) => {
    let progressWidthvalue = progressArea.clientWidth;
    let clickOffsetX = e.offsetX;
    let songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickOffsetX / progressWidthvalue) * songDuration;
    playAudio();
});

// Всплывающий по клику слайдер регулировки громкости

volumeButton.addEventListener('click', () => {
    volumeButton.classList.toggle('active');
    volumeSlider.classList.toggle('active');
});

volumeSlider.addEventListener('input', () => {
    mainAudio.volume = volumeSlider.value;
});




console.log(`
[69/70]
[+] 1. Вёрстка +9
- вёрстка аудиоплеера: есть кнопка Play/Pause, кнопки "Вперёд" и "Назад" для пролистывания аудиотреков, прогресс-бар, отображается название и автор трека +5
- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +4 
(примечание: ссылку на гитхаб добавила в сам аудиоплеер)

[+] 2. Кнопка Play/Pause +10
- есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание аудиотрека +5
- внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент аудиотрек +5

[+] 3. При кликах по кнопкам "Вперёд" и "Назад" переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый +10

[+] 4. При смене аудиотрека меняется изображение - обложка аудиотрека +10

[+] 5. Прогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека +10

[+] 6. Отображается продолжительность аудиотрека и его текущее время проигрывания +10

[+] 7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
(примечание: добавлена регулировка громкости)
- высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо
`)