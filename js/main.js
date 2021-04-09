
//  carusel for 
$("#carouselExampleControls .carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  });



// Navbar icon Open and Close Start
  $("#small-screen-menu .open-nav").click(function(event){
      event.preventDefault();
      $("#small-screen-menu").toggleClass("active");
      $(".small-screen-menu-nav nav").toggleClass("active");
  })
  $("#small-screen-menu .close-menu").click(function(event){
      event.preventDefault();
      $("#small-screen-menu").removeClass("active");
      $(".small-screen-menu-nav nav").removeClass("active");
  })
  
// Navbar icon Open and Close end

