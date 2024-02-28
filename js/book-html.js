function changeImageOpacity() {
    const images = document.querySelectorAll('img');
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
    xhr.open('GET','../data/', true);
    xhr.send();
}

const donQuixoteImage = document.querySelector('#don-quixote-img');
donQuixoteImage.addEventListener('click', function() {
    loadHTML('cervantes-data.html'); 
    changeImageOpacity();
    donQuixoteImage.style.opacity = 1;
});

const taleOfTwoCitiesImage = document.querySelector('#two-cities-img');
taleOfTwoCitiesImage.addEventListener('click', function() {
    loadHTML('dickens-data.html'); 
    changeImageOpacity();
    taleOfTwoCitiesImage.style.opacity = 1;
});

const lordOfTheRingsImage = document.querySelector('#lotr-img');
lordOfTheRingsImage.addEventListener('click', function() {
    loadHTML('tolkein-data.html');
    changeImageOpacity();
    lordOfTheRingsImage.style.opacity = 1;
});
