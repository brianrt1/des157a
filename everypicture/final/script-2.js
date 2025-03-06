"use strict";

// Main initialization function
function initializeGallery() {
    // Define section labels
    var sectionLabels = {
        'sec-1': "The House<br>Kings Beach, CA",
        'sec-2': "The Tower<br>Sacramento, CA", 
        'sec-3': "Deathstar<br>Davis, CA",
        'sec-4': "The Tracks<br>Davis, CA",
        'sec-5': "The Entry<br>Sacramento, CA", 
        'sec-6': "The Structure<br>Sacramento, CA",
        'sec-7': "The Ceiling<br>Davis, CA", 
        'sec-8': "The Facade<br>K Street, Sacramento"
    };

    // Overlay management
    function createOverlay() {
        var overlay = document.createElement('div');
        overlay.id = 'hover-overlay';
        overlay.style.position = 'absolute';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
        overlay.style.color = 'white';
        overlay.style.padding = '10px';
        overlay.style.display = 'none';
        overlay.style.zIndex = '1000';
        document.body.appendChild(overlay);
        return overlay;
    }

    // Create sections overlay
    var hoverOverlay = createOverlay();

    // Scroll event for taskbar
    function handleTaskbarVisibility() {
        var taskbar = document.querySelector('.taskbar');
        if (taskbar) {
            window.onscroll = function() {
                taskbar.style.opacity = window.pageYOffset >= 1000 ? '0' : '1';
            };
        }
    }

    // Hover label functionality
    function setupHoverLabels() {
        var sections = document.getElementsByTagName('*');
        
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            
            // Check if section matches our naming pattern
            if (section.id && section.id.indexOf('sec-') === 0) {
                section.onmouseenter = function(event) {
                    var sectionId = this.id;
                    
                    // Update overlay content
                    hoverOverlay.innerHTML = sectionLabels[sectionId] || 'No Label';
                    hoverOverlay.style.display = 'block';
                    
                    // Position overlay
                    hoverOverlay.style.left = (event.clientX + 10) + 'px';
                    hoverOverlay.style.top = (event.clientY + 10) + 'px';
                };
                
                section.onmouseleave = function() {
                    hoverOverlay.style.display = 'none';
                };
            }
        }
    }

    // Card display management
    function setupCardDisplay() {
        var sections = document.getElementsByTagName('*');
        var overlayCards = [
            '.overlay-card', 
            '.overlay-card-2', 
            '.overlay-card-3', 
            '.overlay-card-4', 
            '.overlay-card-5', 
            '.overlay-card-6', 
            '.overlay-card-7', 
            '.overlay-card-8'
        ];

        // Hide all overlay cards function
        function hideAllCards() {
            for (var i = 0; i < overlayCards.length; i++) {
                var card = document.querySelector(overlayCards[i]);
                if (card) {
                    card.style.display = 'none';
                }
            }
        }

        // Section click handler
        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            
            if (section.id && section.id.indexOf('sec-') === 0) {
                section.onclick = function() {
                    var sectionId = this.id;
                    var cardIndex = parseInt(sectionId.split('-')[1]) - 1;
                    
                    // Hide all cards first
                    hideAllCards();
                    
                    // Show specific card
                    var targetCard = document.querySelector(overlayCards[cardIndex]);
                    if (targetCard) {
                        targetCard.style.display = 'block';
                    }
                };
            }
        }

        // Close card when clicked
        for (var j = 0; j < overlayCards.length; j++) {
            var card = document.querySelector(overlayCards[j]);
            if (card) {
                card.onclick = function() {
                    this.style.display = 'none';
                };
            }
        }
    }

    // Image cycling (simplified)
    function setupImageCycling() {
        var imageGroups = [
            document.querySelectorAll('image01'),
            document.querySelectorAll('image02'),
            document.querySelectorAll('image03')
        ];
        var currentIndex = 0;

        // Initial state
        for (var i = 0; i < imageGroups.length; i++) {
            var images = imageGroups[i];
            for (var j = 0; j < images.length; j++) {
                images[j].classList.add('hidden');
            }
        }

        // Show first group
        if (imageGroups[0].length > 0) {
            for (var k = 0; k < imageGroups[0].length; k++) {
                imageGroups[0][k].classList.remove('hidden');
            }
        }

        // Cycling logic (if hover buttons exist)
        var hoverButtons = document.querySelectorAll('hover-button');
        for (var m = 0; m < hoverButtons.length; m++) {
            hoverButtons[m].onmouseover = function() {
                if (currentIndex < imageGroups.length - 1) {
                    // Hide current images
                    for (var x = 0; x < imageGroups[currentIndex].length; x++) {
                        imageGroups[currentIndex][x].classList.add('hidden');
                    }

                    // Increment and show next images
                    currentIndex++;
                    for (var y = 0; y < imageGroups[currentIndex].length; y++) {
                        imageGroups[currentIndex][y].classList.remove('hidden');
                    }
                }
            };
        }
    }

    // Initialize all functionalities
    function init() {
        handleTaskbarVisibility();
        setupHoverLabels();
        setupCardDisplay();
        setupImageCycling();
    }

    // Run initialization when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

// Call the main initialization function
initializeGallery();