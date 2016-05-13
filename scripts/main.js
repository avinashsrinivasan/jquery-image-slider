$(document).ready(function() {
  console.log("ready");
  startSlider();
});

var currentSlide = 1;
var width = 640;
var animationSpeed = 1000;
var pause = 3000;
var $slider = $("#slider");
var $slideDeck = $slider.find(".slides");
var $slides = $slideDeck.find(".slide");

var startSlider = function() {
  console.log("startSlider");
  var sliderMotion = setInterval(moveSlidesLeft, pause);
}

var moveSlidesLeft = function() {
  console.log("moveSlidesLeft");
  $slideDeck.animate({
    "margin-left": "-=" + width
  }, animationSpeed, stopSlider);
}

var stopSlider = function() {
  console.log("stopSlider #" + $slides.length);
  currentSlide++;
  if (currentSlide === $slides.length) {
    console.log("stop");
    currentSlide = 1;
    $slideDeck.css("margin-left", 0);
    //sliderMotion.clearInterval();
  }
}
