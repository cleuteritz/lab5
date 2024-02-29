function changeImageOpacity() {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.style.opacity = 0.5;
    });
}

function loadXML(filePath, subElementIndex) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');

            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // Clear the existing content

            const books = xmlDoc.getElementsByTagName('book');
            const selectedBook = books[subElementIndex];

            // Check if the selected <book> element exists
            if (selectedBook) {
                // Extract information and append it to the detailsDiv
                const title = selectedBook.getElementsByTagName('title')[0].textContent;
                const author = selectedBook.getElementsByTagName('author')[0].textContent;
                const sold = selectedBook.getElementsByTagName('sold')[0].textContent;
                const description = selectedBook.getElementsByTagName('description')[0].textContent;

                detailsDiv.innerHTML = `
                    <p>Title: ${title}</p>
                    <p>Author: ${author}</p>
                    <p>Sold: ${sold}</p>
                    <p>Description: ${description}</p>
                `;
            }
        }
    };
    xhr.open('GET', 'data/book-data.xml', true);
    xhr.send();
}

function handleImageClick(imageElement, dataFile, subElementIndex) {
    loadXML(dataFile, subElementIndex);
    changeImageOpacity();
    imageElement.style.opacity = 1;
}

document.addEventListener('DOMContentLoaded', function () {
    const donQuixoteImage = document.getElementById('don-quixote-img');
    donQuixoteImage.addEventListener('click', function () {
        handleImageClick(donQuixoteImage, 'book-data.xml', 0);
    });

    const taleOfTwoCitiesImage = document.getElementById('two-cities-img');
    taleOfTwoCitiesImage.addEventListener('click', function () {
        handleImageClick(taleOfTwoCitiesImage, 'book-data.xml', 1);
    });

    const lordOfTheRingsImage = document.getElementById('lotr-img');
    lordOfTheRingsImage.addEventListener('click', function () {
        handleImageClick(lordOfTheRingsImage, 'book-data.xml', 2);
    });
});
