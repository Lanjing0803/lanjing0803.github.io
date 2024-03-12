let currentSection = 0;
let lastScrollTime = 0;

if (window.innerWidth > 1020) {
    window.addEventListener('wheel', (event) => {
        const currentTime = new Date().getTime();
        if (currentTime - lastScrollTime < 1500) {
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
}



 // Scroll to the top when the page loads -- NOT WORKING WHEN FIRST REFRESH

window.addEventListener('unload', function () {
    window.scrollTo(0, 0);
});
//




document.addEventListener('DOMContentLoaded', function () {
    let cards = document.querySelectorAll('.card');

    cards.forEach(item => item.addEventListener('click', () => {
        item.classList.toggle('show');
    }));
});



document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 1020) {
      var scrollElements = document.querySelectorAll('[data-scroll]');
  
      window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
  
        scrollElements.forEach(function (element) {
          var speed = parseFloat(element.getAttribute('data-scroll')) || 1;
          var rect = element.getBoundingClientRect();
          var translateY = -(scrollPosition - rect.top - window.scrollY) * speed * 0.2;
  
          element.style.transform = 'translateY(' + translateY* 0.5 + 'px)';
        });
      });
    }
  });
  
