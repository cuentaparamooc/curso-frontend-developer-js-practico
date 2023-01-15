// DESKTOP MENU
const menuEmail = document.querySelector (".navbar-email");
const desktopMenu = document.querySelector (".desktop-menu");
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
  aside.classList.add("inactive");    
  desktopMenu.classList.toggle('inactive');
}


// MOBILE MENU
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    aside.classList.add("inactive");    
    mobileMenu.classList.toggle('inactive');
}


// SHOPPING CART
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
shoppingCart.addEventListener('click', toggleAside);

function toggleAside(){
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive"); 
  aside.classList.toggle("inactive")   
}