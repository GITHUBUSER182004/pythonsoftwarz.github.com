document.addEventListener('DOMContentLoaded', function() {
    const repoName = "GITHUBUSER182004/Python-Softwares"; // Replace with your GitHub username and repo
    const releasesDiv = document.getElementById('releases');

    fetch(`https://api.github.com/repos/${Python-Softwares}/releases`)
        .then(response => response.json())
        .then(releases => {
            releases.forEach(release => {
                const releaseDiv = document.createElement('div');
                releaseDiv.className = 'release';

                const title = document.createElement('h2');
                title.textContent = release.name;
                releaseDiv.appendChild(title);

                const description = document.createElement('p');
                description.textContent = release.body;
                releaseDiv.appendChild(description);

                const downloadLink = document.createElement('a');
                downloadLink.href = release.assets[0].browser_download_url; // Assumes the first asset is the download link
                downloadLink.textContent = 'Download';
                downloadLink.className = 'download-button';
                releaseDiv.appendChild(downloadLink);

                releasesDiv.appendChild(releaseDiv);
            });
        })
        .catch(error => console.error('Error fetching releases:', error));
});
