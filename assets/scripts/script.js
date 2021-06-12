document.addEventListener('DOMContentLoaded', (event) => {
  let nav = document.querySelector('.nav');
  let burgerBtn = document.querySelector('.burger-btn');
  let burgerBtnClose = document.querySelector('.burger-btn--close');

  burgerBtn.addEventListener('click', function () {
    nav.classList.add('mobile');
    burgerBtn.classList.add('hidden');
  });

  burgerBtnClose.addEventListener('click', function () {
    nav.classList.remove('mobile');
    burgerBtn.classList.remove('hidden');
  })

  $(document).ready(function(){
    $('.swiper').slick({
      prevArrow: $('.projects-swiper__button--prev'),
      nextArrow: $('.projects-swiper__button--next'),
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false
          }
        }
      ]
    });
  });
})