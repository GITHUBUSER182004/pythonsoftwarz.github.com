document.addEventListener('DOMContentLoaded', function() {
    const releases = document.querySelectorAll('.release');
    let delay = 0;

    releases.forEach(release => {
        setTimeout(() => {
            release.style.opacity = 1;
        }, delay);
        delay += 1000;
    });
});
