/* --- JavaScript Code Starts Here --- */
document.addEventListener('DOMContentLoaded', function() {
    // --- Hamburger Menu and Search Functionality ---
    const hamburger = document.querySelector('.hamburger');
    const navList = document.getElementById('navlist');

    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navList.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
    }

    const searchInput = document.getElementById('searchbox');
    const searchButton = document.querySelector('.search-btn');
    const servicesSection = document.getElementById('services');
    const searchResultsSection = document.getElementById('search-results-section');
    const searchResultsContainer = document.getElementById('search-results-container');
    const noResultsMessage = document.getElementById('no-results-message');
    const originalServiceCards = servicesSection ? Array.from(document.querySelectorAll('#services .service-card')) : [];
    const servicesGrid = document.querySelector('.services-grid');

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        searchResultsContainer.innerHTML = '';
        noResultsMessage.style.display = 'none';
        
        if (query === '') {
            if (servicesGrid) servicesGrid.style.display = 'grid';
            searchResultsSection.style.display = 'none';
            return;
        }

        if (servicesGrid) servicesGrid.style.display = 'none';
        searchResultsSection.style.display = 'block';

        let hasResults = false;
        originalServiceCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(query)) {
                const clonedCard = card.cloneNode(true);
                clonedCard.style.minHeight = 'auto'; // Reset min-height for grid view
                searchResultsContainer.appendChild(clonedCard);
                hasResults = true;
            }
        });

        if (!hasResults) {
            noResultsMessage.style.display = 'block';
        }

        searchResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                performSearch();
            }
        });
    }
    
    // REMOVED: All JavaScript code for the services slider.
});

/**
 * This function dynamically adjusts the size and margin of the hero section logo
 * based on the window's width to ensure it looks good on all devices.
 */
function adjustHeroLogo() {
    const logo = document.getElementById('headimg');
    const heroTitle = document.querySelector('.hero-title');

    if (!logo || !heroTitle) {
        console.error('Hero logo or title element not found.');
        return;
    }

    const screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
        logo.style.maxWidth = '350px';
        logo.style.marginBottom = '-70px';
    } else if (screenWidth > 768) {
        logo.style.maxWidth = '300px';
        logo.style.marginBottom = '-60px';
    } else if (screenWidth > 480) {
        logo.style.maxWidth = '250px';
        logo.style.marginBottom = '-50px';
    } else {
        logo.style.maxWidth = '200px';
        logo.style.marginBottom = '-40px';
    }
}

// Run the function when the page is initially loaded
document.addEventListener('DOMContentLoaded', adjustHeroLogo);

// Run the function again whenever the window is resized
window.addEventListener('resize', adjustHeroLogo);
/* --- JavaScript Code Ends Here --- */