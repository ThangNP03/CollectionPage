
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1000,
    
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:false,
        }
      },
    ]
    
  });