document.addEventListener('DOMContentLoaded', function() {
    const repoName = "your-username/your-repo"; // Replace with your GitHub username and repo
    const releasesDiv = document.getElementById('releases');

    fetch(`https://api.github.com/repos/${repoName}/releases`)
        .then(response => response.json())
        .then(releases => {
            releases.forEach(release => {
                // Create container for each release
                const releaseDiv = document.createElement('div');
                releaseDiv.className = 'release';

                // Add release name
                const title = document.createElement('h2');
                title.textContent = release.name;
                releaseDiv.appendChild(title);

                // Add release description
                const description = document.createElement('p');
                description.textContent = release.body;
                releaseDiv.appendChild(description);

                // Add download button for each asset
                release.assets.forEach(asset => {
                    const downloadButton = document.createElement('a');
                    downloadButton.href = asset.browser_download_url;
                    downloadButton.textContent = `Download ${asset.name}`;
                    downloadButton.className = 'download-button';
                    releaseDiv.appendChild(downloadButton);
                });

                releasesDiv.appendChild(releaseDiv);
            });
        })
        .catch(error => console.error('Error fetching releases:', error));
});
