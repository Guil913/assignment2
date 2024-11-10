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


//quote api________________________________________________________________________________
document.addEventListener('DOMContentLoaded', () => {
    const quoteButton = document.querySelector('.quote-button');
    const quoteDisplay = document.querySelector('.quote-display');

    async function fetchRandomQuote() {
        quoteDisplay.textContent = "Loading quote...";

        const response = await fetch('https://api.adviceslip.com/advice');
        
        if (response.ok) {
            const data = await response.json();
            
            if (data && data.slip && data.slip.advice) {
                quoteDisplay.textContent = `"${data.slip.advice}"`; 
            } else {
                quoteDisplay.textContent = "Sorry, could not fetch the quote at the moment.";
            }
        } else {
            quoteDisplay.textContent = "Sorry, could not fetch the quote at the moment.";
        }
    }

    quoteButton.addEventListener('click', fetchRandomQuote);
});

//calendar pop-up________________________________________________________________________________
document.addEventListener('DOMContentLoaded', () => {
    const daysButton = document.querySelector('.days-button');
    const daysOverlay = document.querySelector('.days-overlay');
    const closeDaysPopupButton = document.querySelector('.close-days-popup');
    const daysList = document.querySelector('.days-list');

    for (let i = 1; i <= 31; i++) {
        const dayButton = document.createElement('button');
        dayButton.textContent = `Day ${i}`;
        
        dayButton.addEventListener('click', () => {
            if (i === 1) {
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top for Day 1
            } else {
                const daySection = document.querySelector(`.poem-section h3:nth-of-type(${i - 1})`);
                if (daySection) {
                    daySection.scrollIntoView({ behavior: 'smooth' });
                }
            }

            daysOverlay.style.display = 'none';
        });
        
        daysList.appendChild(dayButton);
    }

    daysButton.addEventListener('click', () => {
        daysOverlay.style.display = 'flex';
    });

    closeDaysPopupButton.addEventListener('click', () => {
        daysOverlay.style.display = 'none';
    });
});

