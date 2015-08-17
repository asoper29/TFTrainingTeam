/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Closes the Responsive Menu on Click outside Menu
$('body > *').not('nav').click(function() {
    if(!$('button.navbar-toggle').hasClass('collapsed')) {
        $('.navbar-toggle:visible').click();
    }
});

// Adds the Google Map
function initializeOsceola() {
  var mapCanvas = document.getElementById('map-canvas-osceola');
  var mapOptions = {
    center: new google.maps.LatLng(28.2880193,-81.4273561),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initializeOsceola);

// Adds the Google Map
function initializePowerFitness() {
  var mapCanvas = document.getElementById('map-canvas-powerfitness');
  var mapOptions = {
    center: new google.maps.LatLng(28.3137962,-81.4683571),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initializePowerFitness);
