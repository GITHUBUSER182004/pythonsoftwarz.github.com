window.onload = function() {
    const releases = document.querySelectorAll('.release');
    let delay = 300; // Start delay after the initial page load

    releases.forEach(release => {
        setTimeout(() => {
            release.style.opacity = 1;
        }, delay);
        delay += 100; // Increase delay for each release
    });
};
