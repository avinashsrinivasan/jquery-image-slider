var currentSlide = 1;
var width = 640;
var animationSpeed = 1000;
var pause = 1000;
var $slider = $("#slider");
var $slideDeck = $slider.find(".slides");
var $slides = $slideDeck.find(".slide");
var sliderMotion;

var startSlider = function() {
  console.log("startSlider");
  sliderMotion = setInterval(runSlider, pause);
}

var runSlider = function() {
  console.log("runSlider");
  $slideDeck.animate({
    "margin-left": "-=" + width
  }, animationSpeed, loopSlider);
}

var loopSlider = function() {
  console.log("loopSlider #" + $slides.length);
  currentSlide++;
  if (currentSlide === $slides.length) {
    console.log("stop");
    currentSlide = 1;
    $slideDeck.css("margin-left", 0);
  }
}

var stopSlider = function() {
  clearInterval(sliderMotion);
}

$(document).ready(function() {
  console.log("ready");
  startSlider();

  $slider.on("mouseover", stopSlider).on("mouseleave", startSlider);
});
