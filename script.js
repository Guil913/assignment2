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
    // Get elements from the DOM using class selectors
    const animalFactButton = document.querySelector('.get-animal-fact');
    const animalFactDisplay = document.querySelector('.animal-fact');

    // Function to fetch animal fact
    async function fetchAnimalFact() {
        // Show loading text while waiting for the fact
        animalFactDisplay.textContent = "Loading animal fact...";

        try {
            const response = await fetch('https://some-random-api.ml/facts/animal');
            
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const data = await response.json();

            // Check if the fact is available in the response
            if (data && data.fact) {
                // Display the fact in the div
                animalFactDisplay.textContent = data.fact;
            } else {
                animalFactDisplay.textContent = "Sorry, could not fetch the animal fact at the moment.";
            }
        } catch (error) {
            // Handle any errors
            animalFactDisplay.textContent = "Sorry, could not fetch the animal fact at the moment.";
            console.error(error);
        }
    }

    // Add event listener to the button to fetch animal fact when clicked
    animalFactButton.addEventListener('click', fetchAnimalFact);
});
