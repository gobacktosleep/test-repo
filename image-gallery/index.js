const url = `https://api.unsplash.com/photos/random?client_id=A6uE84vtbeiEqrKA1qC3tcKpoU98lDCawcNX6RZlafs&count=12`;
const gallery = document.querySelector('.grid');

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
};

function showData(data) {
    data.forEach((item, index) => {
        const img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';
        gallery.appendChild(img);
    });
};

getData();
