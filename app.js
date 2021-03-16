$(function(){
  $('.slide-picture').slick({
    accessibility: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    dots: true,
    fade: true,
  });
  $('.js-toggle-sp-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });
});
