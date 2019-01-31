/* Body scrolling events */

window.addEventListener("scroll", function(){
  if(window.innerWidth >= 720){
    scrollNavBar();
  }
  
  scrollCallUsCont();
  scrollCarouselOne();
  scrollCarouselTwo();
  scrollCarouselThree();
});

function scrollNavBar() {
  var navbar = document.getElementById("main-nav");
      
  if (window.pageYOffset >= 80) {
    navbar.style.backgroundColor = "rgba(0,0,0, 0.7)";
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
    node.classList.add('animated', 'fadeIn');
  }
}

function scrollCarouselTwo() {
  if(window.innerHeight + window.scrollY > window.innerHeight + 2200){
    const node = document.getElementById("carouselTwo");
    node.classList.add('animated', 'fadeIn');
  }
}

function scrollCarouselThree() {
  if(window.innerHeight + window.scrollY > window.innerHeight + 2750){
    const node = document.getElementById("carouselThree");
    node.classList.add('animated', 'fadeIn');
  }
}

/* 320px navigation bar setup */

var hamburgerIcon = document.getElementById('hamburger-icon');
var exitIcon = document.getElementById('exit-icon');
var listContainer = document.getElementById('list-container');

hamburgerIcon.addEventListener('click', function(){
  displayItem();
});

exitIcon.addEventListener('click', function(){
  hideItem();
});

function displayItem(){
  listContainer.style.display = 'block';
  exitIcon.style.display = 'block';
  hamburgerIcon.style.display = 'none';
}

function hideItem(){
  listContainer.style.display = 'none';
  exitIcon.style.display = 'none';
  hamburgerIcon.style.display = 'block';
}

/* Menu page carousel script */

$(document).ready(function(){
  $('.food-slider1').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.prev1'),
    nextArrow: $('.next1'),
  });
});

$(document).ready(function(){
  $('.food-slider2').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.prev2'),
    nextArrow: $('.next2'),
  });
});

$(document).ready(function(){
  $('.food-slider3').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.prev3'),
    nextArrow: $('.next3'),
  });
});

































