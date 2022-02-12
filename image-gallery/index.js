const url = `https://api.unsplash.com/photos/random?client_id=A6uE84vtbeiEqrKA1qC3tcKpoU98lDCawcNX6RZlafs&count=12`;
const gallery = document.querySelector('.grid');
const searchButton = document.querySelector('.search-button');
const input = document.querySelector('input');

searchButton.addEventListener('click', function() {
    searchImages();
});

input.addEventListener('keyup', function(event) {
    if(event.key === 'Enter')
    searchImages();
});

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
};

function showData(data) {
    data.forEach((item) => {
        const img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';
        gallery.appendChild(img);
    });
};

getData();

function searchImages() {
    removeImages();

    const searchUrl = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=12&client_id=A6uE84vtbeiEqrKA1qC3tcKpoU98lDCawcNX6RZlafs';
    fetch(searchUrl)
    .then((res) => res.json())
    .then((data) => {
        showData(data.results);
    });
};

function removeImages() {
    gallery.innerHTML = '';
}

console.log(`
[70/70]
[+] 1. Вёрстка +10
- на странице есть несколько фото и строка поиска +5
- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5

[+] 2. При загрузке приложения на странице отображаются полученные от API изображения +10

[+] 3. Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10

[+] 4. Поиск +30
- при открытии приложения курсор находится в поле ввода +5
- есть placeholder +5
- автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5
- поисковый запрос можно отправить нажатием клавиши Enter +5
- после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5
- в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5

[+] 5. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо

`)