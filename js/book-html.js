const images = document.querySelectorAll('img');

function changeImageOpacity() {
    images.forEach((image) => {
        image.style.opacity = 0.5;
    });
}

function loadHTML(filePath) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'data/', true);
    xhr.send();
}

function handleImageClick(imageElement, dataFile) {
    loadHTML(dataFile);
    changeImageOpacity();
    imageElement.style.opacity = 1;
}

const donQuixoteImage = document.querySelector('#don-quixote-img');
donQuixoteImage.addEventListener('click', function() {
    handleImageClick(donQuixoteImage, 'cervantes-data.html');
});

const taleOfTwoCitiesImage = document.querySelector('#two-cities-img');
taleOfTwoCitiesImage.addEventListener('click', function() {
    handleImageClick(taleOfTwoCitiesImage, 'dickens-data.html');
});

const lordOfTheRingsImage = document.querySelector('#lotr-img');
lordOfTheRingsImage.addEventListener('click', function() {
    handleImageClick(lordOfTheRingsImage, 'tolkein-data.html');
});
