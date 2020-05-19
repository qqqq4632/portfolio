'use strict';
// Make navbar transparent
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(navbarHeight);
    if (window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
   console.log(event.target.dataset.link); 
   const target = event.target;
   const link = target.dataset.link;
   if(link == null) {
       return;
   }
   
   console.log(event.target.dataset.link);
   const scrllTo = document.querySelector(link);
   scrllTo.scrollIntoView({ behavior: 'smooth'});
});

// Navbar toggle button
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});