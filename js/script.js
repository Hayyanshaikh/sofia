$(function() {
  menuDropdown();
  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');

  var mySwiper = new Swiper('.collection_slider', {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    speed: 500,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.collection_slider_buttons .swiper-button-next',
      prevEl: '.collection_slider_buttons .swiper-button-prev',
    },
    breakpoints: {
      992: {
        centeredSlides: false,
      },
    }
  });
});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-start') : menu.removeClass('offcanvas offcanvas-start');
}

const menuDropdown = () => {
  const categoriesLinks = $(".header_categories li > a");
  $(window).width() < 992 ? categoriesLinks.click(function() {
    $(this).parent().find(".dropdown-menu").slideToggle();
  }) : categoriesLinks.unbind("click");
}