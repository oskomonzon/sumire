/* jshint devel:true */
'use strict';
console.log('© '+(new Date()).getFullYear()+' - Los del Marote');

// Menu Toggle
$('#menu-toggle').click(function() {
  $('.menu__lista').toggleClass('menu__lista--is-active');
  $('.menu__toggle>i').toggleClass('fa-bars');
  $('.menu__toggle>i').toggleClass('fa-close');
});

// Hader Parallax
var headerHeight = $('#header').height();

$(window).scroll(function(){
  var position = $(window).scrollTop();
  if(position < headerHeight){

    var bgpos = 75 - (100 * (position/headerHeight)/2);
    $('#header').css('background-position', 'center '+bgpos+'%');

  }
});

// Smooth Scroll
$('a[href*=#]:not([href=#])').click(function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 150
      }, 1000);
      return false;
    }
  }
});

// Lazy thingy
$('.producto__foto').click(function(){
  // Obtengo la imágen
  var img_url = $(this).find('img:first').attr('src');
  var img = $('<img />').attr('src', img_url)
  .load(function() {  // Cuando termine de cargarse en caché...
      if (!this.complete || typeof this.naturalWidth === 'undefined' || this.naturalWidth === 0) {
          alert('Algo salió mal :(');
      } else {
          $('.fullscreen--derecha').css('background-image','url("'+img.attr('src')+'")');
          $('.fullscreen--izquierda').css('background-image','url("'+img.attr('src')+'")');
          $('.fullscreen').addClass('fullscreen--is-active');
      }
  });
});
// Cerrar
$('.fullscreen').click(function(){
  $('.fullscreen').removeClass('fullscreen--is-active');
});
