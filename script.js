window.onload = function() {
    const releases = document.querySelectorAll('.release');
    let delay = 500; // Start delay after the initial page load

    releases.forEach(release => {
        setTimeout(() => {
            release.style.opacity = 1;
        }, delay);
        delay += 1000; // Increase delay for each release
    });
};
