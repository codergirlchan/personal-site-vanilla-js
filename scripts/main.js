// Toggle button
const toggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('#header-nav');

function toggleNavClass() {
    nav.classList.toggle('nav-open');
}

toggle.onclick = toggleNavClass;

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    if(scrollPosition >= 300) {
        nav.classList.add('nav-solid');
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