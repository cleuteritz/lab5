function loadJSON(filePath, objectIndex) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonData = JSON.parse(xhr.responseText);
            let newHTML = '';

            jsonData.forEach((item, index) => {
                if (index === objectIndex) {
                    // Assuming each item has properties like 'title', 'author', etc.
                    newHTML += `<p>Title: ${item.title}</p>`;
                    newHTML += `<p>Author: ${item.author}</p>`;
                    newHTML += `<p>Sold: ${item.sold}</p>`;
                    newHTML += `<p>Description: ${item.description}</p>`;
                }
            });

            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = newHTML;
        }
    };
    xhr.open('GET', 'data/' + filePath, true);
    xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
    const donQuixoteImage = document.querySelector('#don-quixote-img');
    donQuixoteImage.addEventListener('click', function() {
        loadJSON('cervantes-data.json', 0);
        changeImageOpacity();
        donQuixoteImage.style.opacity = 1;
    });

    const taleOfTwoCitiesImage = document.querySelector('#two-cities-img');
    taleOfTwoCitiesImage.addEventListener('click', function() {
        loadJSON('dickens-data.json', 0);
        changeImageOpacity();
        taleOfTwoCitiesImage.style.opacity = 1;
    });

    const lordOfTheRingsImage = document.querySelector('#lotr-img');
    lordOfTheRingsImage.addEventListener('click', function() {
        loadJSON('tolkein-data.json', 0);
        changeImageOpacity();
        lordOfTheRingsImage.style.opacity = 1;
    });
});
