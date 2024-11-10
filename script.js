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
// Function to fetch a random animal fact
async function getRandomAnimalFact() {
    try {
        const response = await fetch('https://some-random-api.ml/facts/animal');
        
        if (!response.ok) {
            throw new Error('Failed to fetch animal fact');
        }

        const data = await response.json();
        return data.fact;  // The fact will be inside the 'fact' key
    } catch (error) {
        console.error('Error fetching animal fact:', error);
        return 'Sorry, could not fetch the animal fact at the moment.';
    }
}

// Function to display the fetched animal fact
function displayAnimalFact() {
    getRandomAnimalFact().then(fact => {
        const animalFactElement = document.querySelector('.animal-fact p');
        animalFactElement.textContent = fact;  // Set the fact as the text of the paragraph
    });
}

// Call the function to display the animal fact when the page loads
document.addEventListener('DOMContentLoaded', displayAnimalFact);
