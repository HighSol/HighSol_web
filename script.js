document.getElementById('toggleInfo').addEventListener('click', function() {
    const extraInfo = document.getElementById('extraInfo');
    if (extraInfo.style.display === 'none') {
        extraInfo.style.display = 'block';
    } else {
        extraInfo.style.display = 'none';
    }
});
