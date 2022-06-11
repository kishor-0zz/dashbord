jQuery(function ($) {
  "use strict"

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });






  // Isotop init
  var gridfilter = $('#product-filter-content');
  if (gridfilter.length) {
    $('#product-filter-content').imagesLoaded(function () {
      $('#product-filter-nav').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue
        });
      });
      var $grid = $('#product-filter-content').isotope({
        itemSelector: '.product-filter-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.product-filter-item',
        }
      });
    });
  }

  if ($('#product-filter-nav button').length) {
    var projectfiler = $('#product-filter-nav button');
    if (projectfiler.length) {
      $('#product-filter-nav button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });
    }
  }


});