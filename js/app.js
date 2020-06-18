window.addEventListener('load', function() {
  const carouselList = document.querySelector('.carousel__list');

  new Glider(carouselList, {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: '.carousel__indicators',
    arrows: {
      prev: '.carousel__left',
      next: '.carousel__right'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
});