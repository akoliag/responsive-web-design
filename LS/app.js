//hamburger menu toggle:
 function menuToggle() {
   const hamburgerMenu = document.querySelectorAll('.Navbar__Items--right');

   hamburgerMenu.forEach(hamburger => hamburger.classList.toggle('Navbar__ToggleShow'));
 }

 document.querySelector('.Navbar__Link-toggle').addEventListener('click', menuToggle);
