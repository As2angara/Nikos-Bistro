/*function myScrollFunction() {
  scrollNavBar();
  scrollCallUsCont();
  scrollCarouselOne();
  scrollCarouselTwo();
  scrollCarouselThree();
}*/

function scrollNavBar() {
  var navbar = document.getElementById("main-nav");
      
  if (window.pageYOffset >= 80) {
    navbar.style.backgroundColor = "rgba(42, 34, 34, 0.7)";
  } else if(window.pageYOffset == 0) {
    navbar.style.backgroundImage = "linear-gradient(to bottom, rgba(42, 34, 34, 1.0), rgba(42, 34, 34, 0))";
    navbar.style.backgroundColor = "transparent";
  }
}

function scrollCallUsCont() {
  if(window.innerHeight + window.scrollY > window.innerHeight + 1000){
    const node = document.getElementById("call-us-container");
    node.classList.add('animated', 'fadeInLeft');
  }
}

function scrollCarouselOne() {
  if(window.innerHeight + window.scrollY > window.innerHeight + 1650){
    const node = document.getElementById("carouselOne");
    node.classList.add('animated', 'fadeInRight');
  }
}

function scrollCarouselTwo() {
  if(window.innerHeight + window.scrollY > window.innerHeight + 2200){
    const node = document.getElementById("carouselTwo");
    node.classList.add('animated', 'fadeInLeft');
  }
}

function scrollCarouselThree() {
  if(window.innerHeight + window.scrollY > window.innerHeight + 2750){
    const node = document.getElementById("carouselThree");
    node.classList.add('animated', 'fadeInRight');
  }
}

$(document).ready(function(){
  $('.food-slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3
  });
});
