let currentSection = 0;
let lastScrollTime = 0;


window.addEventListener('wheel', (event) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastScrollTime < 800) {
        return;  
    }
    
    if (event.deltaY > 0) {
        scrollToSection(currentSection + 1);
    } else {
        scrollToSection(currentSection - 1);
    }
    
    lastScrollTime = currentTime;
});

function scrollToSection(sectionIndex) {
    const sections = document.querySelectorAll('.section');
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
        currentSection = sectionIndex;
        const offset = -currentSection * 100;
        sections.forEach((section) => {
            section.style.transform = `translateY(${offset}vh)`;
        });
    }
}


 // Scroll to the top when the page loads -- NOT WORKING WHEN FIRST REFRESH


window.addEventListener('unload', function () {
    window.scrollTo(0, 0);
});

