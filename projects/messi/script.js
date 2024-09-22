// Sample JavaScript code for dynamic content

// Player statistics data
const playerStats = {
    goals: 704,
    assists: 302,
    appearances: 857,
};

// Function to display player statistics
function displayPlayerStats() {
    const statsList = document.getElementById('player-stats');
    for (const [key, value] of Object.entries(playerStats)) {
        const listItem = document.createElement('li');
        listItem.textContent = ${key.charAt(0).toUpperCase() + key.slice(1)}: ${value};
        statsList.appendChild(listItem);
    }
}

// Sample photo gallery data
const photoGallery = [
    'https://www.gettyimages.com/detail/news-photo/lionel-messi-of-fc-barcelona-shows-his-dejection-during-the-news-photo/1318342040.jpg',
    'https://www.gettyimages.com/detail/news-photo/lionel-messi-of-inter-miami-cf-hoist-his-trophy-during-the-news-photo/1786906095.jpg',
    'https://www.gettyimages.com/detail/news-photo/inter-miami-cfs-argentine-forward-lionel-messi-receives-his-news-photo/1754429776.jpg',
];

// Function to display photo gallery
function displayPhotoGallery() {
    const galleryDiv = document.querySelector('.photo-gallery');
    photoGallery.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo;
        img.alt = 'Gallery photo';
        galleryDiv.appendChild(img);
    });
}

// Sample news updates data
const newsUpdates = [
    'Messi wins Ballon d\'Or for the 7th time!',
    'Messi scores a stunning goal in the Champions League.',
    'Messi signs new contract with Paris Saint-Germain.',
];

// Function to display news updates
function displayNewsUpdates() {
    const newsList = document.getElementById('news-list');
    newsUpdates.forEach(news => {
        const listItem = document.createElement('li');
        listItem.textContent = news;
        newsList.appendChild(listItem);
    });
}

// Initialize content
document.addEventListener('DOMContentLoaded', () => {
    displayPlayerStats();
    displayPhotoGallery();
    displayNewsUpdates();
});