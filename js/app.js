
$(document).ready(function() {
   $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
         {
           breakpoint: 800,
           settings: {
             centerMode: true,
             centerPadding: '40px',
             slidesToShow: 2
           }},
           {
            breakpoint: 700,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              dots: true
            }}]
   })
})


$(document).ready(function() {
   $('.header_burger').click(function(event) {
      $('.header_burger, .header_menu, .header, .logo').toggleClass('act');
  });
})

