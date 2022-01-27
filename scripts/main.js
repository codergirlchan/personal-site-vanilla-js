const toggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('#header-nav');

function navToggle() {
    nav.classList.toggle('nav-open');
}

toggle.onclick = navToggle;