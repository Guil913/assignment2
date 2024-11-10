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
      
        document.body.style.opacity = 0;

        setTimeout(() => {
            themes.forEach((theme, index) => {
                theme.disabled = index !== currentThemeIndex;
            });
            updateSeasonText();
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;

      
            document.body.style.opacity = 1;
        }, 500); // (0.5s)
    }

 
    themes[currentThemeIndex].disabled = false;
    updateSeasonText();

 
    swapButton.addEventListener('click', swapTheme);
});



// button what is this ?________________________________________________________________________________

document.addEventListener('DOMContentLoaded', () => {
    const whatIsThisLink = document.querySelector('.what-is-this');
    const infoOverlay = document.querySelector('.info-overlay');
    const closeButton = document.querySelector('.close-button');


    whatIsThisLink.addEventListener('click', () => {
        infoOverlay.style.display = 'flex'; // Show
    });


    closeButton.addEventListener('click', () => {
        infoOverlay.style.display = 'none'; // Hide
    });
});


//carousel________________________________________________________________________________
document.addEventListener('DOMContentLoaded', () => {
    const quoteButton = document.querySelector('.quote-button');
    const quoteDisplay = document.querySelector('.quote-display');

    // Function to fetch random quote
    async function fetchRandomQuote() {
        quoteDisplay.textContent = "Loading quote...";

        try {
            const response = await fetch('https://api.adviceslip.com/advice');

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const data = await response.json();

            // Check if the advice is available
            if (data && data.slip && data.slip.advice) {
                quoteDisplay.textContent = `"${data.slip.advice}"`; // Display the advice as a quote
            } else {
                quoteDisplay.textContent = "Sorry, could not fetch the quote at the moment.";
            }
        } catch (error) {
            quoteDisplay.textContent = "Sorry, could not fetch the quote at the moment.";
            console.error(error);
        }
    }

    // Add event listener to the button to fetch the quote when clicked
    quoteButton.addEventListener('click', fetchRandomQuote);
});
