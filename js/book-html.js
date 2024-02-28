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
    xhr.open('GET', filePath, true);
    xhr.send();
}

const donQuixoteImage = document.querySelector('#don-quixote-image');
donQuixoteImage.addEventListener('click', function() {
    loadHTML('/path/to/your/html/file.html');
    changeImageOpacity();
    donQuixoteImage.style.opacity = 1;
});


const taleOfTwoCitiesImage = document.querySelector('#tale-of-two-cities-image');
taleOfTwoCitiesImage.addEventListener('click', function() {
    loadHTML('/path/to/your/html/file.html');
    changeImageOpacity();
    taleOfTwoCitiesImage.style.opacity = 1;
});


const lordOfTheRingsImage = document.querySelector('#lord-of-the-rings-image');
lordOfTheRingsImage.addEventListener('click', function() {
    loadHTML('/path/to/your/html/file.html');
    changeImageOpacity();
    lordOfTheRingsImage.style.opacity = 1;
});
