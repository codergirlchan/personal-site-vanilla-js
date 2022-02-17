// Toggle button
const toggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('#header-nav');
const navLinks = document.querySelectorAll('.nav-link');

function toggleNavClass(className) {
    nav.classList.toggle(className);
}

toggle.onclick = function() {
    toggleNavClass('nav-open');
}

if(window.screen.width < 768) {
    navLinks.forEach(link => link.onclick = function() {
        toggleNavClass('nav-open')
    }); 
}

let scrollTimer; 

function setScrollTimer() {
    if(scrollTimer) {
        clearTimeout(scrollTimer);   
    }
    scrollTimer = setTimeout(function() {
          toggleNavClass('slideUp');
    }, 150);
}

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    if(scrollPosition >= 300) {
        nav.classList.add('nav-solid');
        setScrollTimer();
    } else {
        nav.classList.remove('nav-solid');
    }
});

// Form Thank You Message

const form = document.querySelector('.contact-form');
const thankYouSection = document.querySelector('.thank-you-section');

function submitForm() {
    form.classList.add('hidden');
    thankYouSection.classList.remove('hidden');
}

form.onsubmit = submitForm;