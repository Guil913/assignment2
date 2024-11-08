document.addEventListener('DOMContentLoaded', () => {
    const themes = Array.from(document.querySelectorAll('.theme'));
    const seasonText = document.querySelector('.current-season');
    const swapButton = document.querySelector('.swap-style-button');
    let currentThemeIndex = 0;

    function updateSeasonText() {
        const currentTheme = themes[currentThemeIndex];
        seasonText.textContent = `Current Season: ${currentTheme.getAttribute('data-season')}`;
    }

    function swapTheme() {
        themes.forEach((theme, index) => {
            theme.disabled = index !== currentThemeIndex;
        });
        updateSeasonText();
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    }

    // Enable the first theme on load
    themes[currentThemeIndex].disabled = false;
    updateSeasonText();

    // Swap theme on button click
    swapButton.addEventListener('click', swapTheme);
});


// botao what is this ?

document.addEventListener('DOMContentLoaded', () => {
    const whatIsThisLink = document.querySelector('.what-is-this');
    const infoOverlay = document.querySelector('.info-overlay');
    const closeButton = document.querySelector('.close-button');

    // Open info pop-up when "What is this?" is clicked
    whatIsThisLink.addEventListener('click', () => {
        infoOverlay.style.display = 'flex'; // Show
    });


    closeButton.addEventListener('click', () => {
        infoOverlay.style.display = 'none'; // Hide
    });
});
