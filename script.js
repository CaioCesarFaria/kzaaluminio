// MENU HAMBURGUER

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');   

    menu.classList.toggle('active');   

});

// SWIPER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    
    autoplay: {
        delay:   
     3000, // 3000 milliseconds = 3 seconds
      },
    
  });