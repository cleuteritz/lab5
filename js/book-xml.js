function changeImageOpacity() {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.style.opacity = 0.5;
    });
}

function loadXML(filePath, subElementIndex) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');

            // Process the XML data and add it to the DOM
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // Clear the existing content

            const subElements = xmlDoc.querySelectorAll('*');
            const selectedSubElement = subElements[subElementIndex];

            // Check if the selected sub-element exists
            if (selectedSubElement) {
                // Extract text content and append it to the detailsDiv
                detailsDiv.appendChild(document.createTextNode(selectedSubElement.textContent));
            }
        }
    };
    xhr.open('GET', filePath, true);
    xhr.send();
}

function handleImageClick(imageElement, dataFile, subElementIndex) {
    loadXML(dataFile, subElementIndex);
    changeImageOpacity();
    imageElement.style.opacity = 1;
}

document.addEventListener('DOMContentLoaded', function() {
    const donQuixoteImage = document.querySelector('#don-quixote-img');
    donQuixoteImage.addEventListener('click', function() {
        handleImageClick(donQuixoteImage, 'book-data.xml', 0);
    });

    const taleOfTwoCitiesImage = document.querySelector('#two-cities-img');
    taleOfTwoCitiesImage.addEventListener('click', function() {
        handleImageClick(taleOfTwoCitiesImage, 'book-data.xml', 1);
    });

    const lordOfTheRingsImage = document.querySelector('#lotr-img');
    lordOfTheRingsImage.addEventListener('click', function() {
        handleImageClick(lordOfTheRingsImage, 'book-data.xml', 2);
    });
});
