var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  function scrollToTop() {

    window.scrollTo({top: 0, behavior: 'smooth'});
    
    }

   