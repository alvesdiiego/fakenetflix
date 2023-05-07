$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    auto:true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

function abrirMenu() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }