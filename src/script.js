function changeImage() {
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            const images = data.images;
            const randomIndex = Math.floor(Math.random() * images.length);
            const randomImageUrl = images[randomIndex];
            console.log(images[randomIndex]);
            const randomImageContainer = document.getElementById("randomImageContainer");
            const imgElement = document.createElement("img");
            imgElement.src = randomImageUrl;
            imgElement.alt = "Random Image";
            randomImageContainer.innerHTML = ''; // Clear previous image
            randomImageContainer.appendChild(imgElement);
        })
        .catch(error => console.error('Error fetching imaes:', error));
}
