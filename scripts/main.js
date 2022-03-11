// Toggle button
const toggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('#header-nav');
const navLinks = document.querySelectorAll('.nav-link');

function toggleNavClass(className) {
    nav.classList.toggle(className);
}

toggle.addEventListener('click', function() {
    toggleNavClass('nav-open');
});

if(window.screen.width < 768) {
    navLinks.forEach(link => link.addEventListener('click', function() {
        toggleNavClass('nav-open');
    }));
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
const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6dlXHsLi_FLxt-6sd2_bwXe0b3pNDWDY_vHDTC-93FNZ3Ww/formResponse';

async function submitForm(e) {

    const data = new FormData(e.target);

    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'no-cors',
            body: data
        });
    } catch(e) {
        alert(
            'Form could not be submitted at this time try again later or you can send an email directly to contact@codergirlchan.com'
        );
    }
    
    form.classList.add('hidden');
    thankYouSection.classList.remove('hidden');
}

form.addEventListener('submit', async function(e){
    e.preventDefault();
    await submitForm(e);
});