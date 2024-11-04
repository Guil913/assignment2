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

    swapButton.addEventListener('click', swapTheme);
    swapTheme(); 
});
