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

// const form = document.querySelector('.contact-form');
// const thankYouSection = document.querySelector('.thank-you-section');

// function submitForm(evt) {
//     evt.preventDefault();

//     const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6dlXHsLi_FLxt-6sd2_bwXe0b3pNDWDY_vHDTC-93FNZ3Ww/formResponse';

//     const data = new FormData(evt.target);

//     try {
//         fetch(url, {
//             method: 'POST', // *GET, POST, PUT, DELETE, etc.
//             body: data
//         });

//         form.classList.add('hidden');
//         thankYouSection.classList.remove('hidden');
//     } catch(e) {
//         form.classList.add('hidden');
//         // thankYouSection.classList.remove('hidden');
//     }
// }

// form.addEventListener('submit', function(){
//     submitForm(evt);
// });