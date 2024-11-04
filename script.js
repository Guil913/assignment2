document.addEventListener('DOMContentLoaded', () => {
    const poemContainer = document.getElementById('poemContainer');
    const poemTemplate = document.getElementById('poemTemplate');

    // add
    function addMorePoems() {
        const newPoemSection = poemTemplate.cloneNode(true); // Clone 
        poemContainer.appendChild(newPoemSection); // Append 
    }

    // Infinite scroll:
    window.addEventListener('scroll', () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const threshold = document.body.offsetHeight - 500;

        if (scrollPosition >= threshold) {
            addMorePoems();
        }
    });


//_____________________________________________________________

  
    const stylesheets = [
        document.getElementById('theme1'),
        document.getElementById('theme2'),
        document.getElementById('theme3'),
        document.getElementById('theme4')
    ];
    let currentStyleIndex = 0;

    document.getElementById('swapStyleButton').addEventListener('click', () => {
     
        stylesheets[currentStyleIndex].disabled = true;

  
        currentStyleIndex = (currentStyleIndex + 1) % stylesheets.length;

   
        stylesheets[currentStyleIndex].disabled = false;
    });
});

