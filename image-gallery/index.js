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