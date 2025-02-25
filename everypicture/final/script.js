"use strict";

window.addEventListener('scroll', function() {
    if (window.scrollY >= 1000) {
        document.querySelector('.taskbar').style.opacity = 0;
    } else {
        document.querySelector('.taskbar').style.opacity = 1;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Labels for each section
    const labelData = {
        'sec-1': "The House <br> Kings Beach, CA",
        'sec-2': "The Tower <br> Sacramento, CA",
        'sec-3': "Deathstar <br> Davis, CA",
        'sec-4': "The Tracks <br> Davis, CA",
        'sec-5': "The Entry <br> Sacramento, CA",
        'sec-6': "The Structure <br> Sacramento, CA",
        'sec-7': "The Ceiling <br> Davis, CA",
        'sec-8': "The Facade <br> K Street, Sacramento"
    };

    // Ensure overlay exists
    const overlay = document.getElementById('tag-1');

    if (overlay) {
        const textTitle = overlay.querySelector('.text-title');

        function showOverlay(id, event) {
            if (!labelData[id]) return;
            textTitle.innerHTML = labelData[id];
            overlay.style.display = 'block';
            moveOverlay(event);
        }

        function moveOverlay(event) {
            overlay.style.left = (event.clientX + 10) + 'px';
            overlay.style.top = (event.clientY + 10 + window.scrollY) + 'px';
        }

        function hideOverlay() {
            overlay.style.display = 'none';
        }

    
        for (let i = 1; i <= 8; i++) {
            let img = document.getElementById('sec-' + i);
            if (img) {
                img.addEventListener('mouseenter', (event) => {
                    img.style.cursor = 'pointer';
                    showOverlay('sec-' + i, event);
                    document.addEventListener('mousemove', moveOverlay);
                });

                img.addEventListener('mouseleave', () => {
                    hideOverlay();
                    img.style.cursor = 'default';
                    document.removeEventListener('mousemove', moveOverlay);
                });
            }
        }
    }

    // Handle overlay card display when clicking sections
    const overlayMapping = {
        'sec-1': '.overlay-card',
        'sec-2': '.overlay-card-2',
        'sec-3': '.overlay-card-3',
        'sec-4': '.overlay-card-4',
        'sec-5': '.overlay-card-5',
        'sec-6': '.overlay-card-6',
        'sec-7': '.overlay-card-7',
        'sec-8': '.overlay-card-8'
    };

    const sections = document.querySelectorAll('[id^="sec-"]');
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        section.addEventListener('click', function() {
            // Hide all overlay cards first
            const allCards = document.querySelectorAll('.overlay-card, .overlay-card-2, .overlay-card-3, .overlay-card-4, .overlay-card-5, .overlay-card-6, .overlay-card-7, .overlay-card-8');
            for (let j = 0; j < allCards.length; j++) {
                allCards[j].style.display = 'none';
            }

            // Get the correct overlay class from the mapping
            const targetOverlayClass = overlayMapping[section.id];
            const targetOverlay = document.querySelector(targetOverlayClass);

            if (targetOverlay) {
                targetOverlay.style.display = 'block';
            }
        });
    }

    // Handle closing overlay cards
    const cards = document.querySelectorAll('.overlay-card, .overlay-card-2, .overlay-card-3, .overlay-card-4, .overlay-card-5, .overlay-card-6, .overlay-card-7, .overlay-card-8');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', () => cards[i].style.display = 'none');
    }

    // Image cycling on hover
    const hoverButton = document.getElementByClass("hover-button");
    const images = [
        document.getElementByClass("image01"),
        document.getElementByClass("image02"),
        document.getElementByClass("image03")
    ];
    let currentIndex = 0;

    if (images[0]) images[0].classList.remove("hidden");
    if (images[1]) images[1].classList.add("hidden");
    if (images[2]) images[2].classList.add("hidden");

    if (hoverButton) {
        hoverButton.addEventListener("mouseover", function () {
            if (currentIndex < images.length - 1) {
                images[currentIndex].classList.add("hidden");
                currentIndex++;
                images[currentIndex].classList.remove("hidden");
            }
        });
    }
});
