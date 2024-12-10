const apiKey = 'YOUTUBE_API'; // ここに API キーを貼り付け
const searchButton = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function searchVideos() {
  const searchTerm = searchInput.value;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&q=${searchTerm}&key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      searchResults.innerHTML = '';
      data.items.forEach(item => {
        const videoTitle = item.snippet.title;
        const videoDescription = item.snippet.description;
        const videoThumbnail = item.snippet.thumbnails.default.url;
        const videoUrl = `https://www.youtube.com/watch?v=${item.id.videoId}`;

        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
          <a href="${videoUrl}" target="_blank">
            <img src="${videoThumbnail}" alt="${videoTitle}">
            <h3>${videoTitle}</h3>
            <p>${videoDescription}</p>
          </a>
        `;
        searchResults.appendChild(videoElement);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
