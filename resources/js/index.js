$(document).ready(function() {
    
    
  /* For the sticky navigation */
  $('.section-features').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }, {
    offset: '60px;'
  });
  
  
  /* Scroll on buttons */
  $('.scroll-to-plans').click(function () {
     $('html, body').animate({scrollTop: $('.section-plans').offset().top}, 1000); 
  });
  
  $('.scroll-to-start').click(function () {
     $('html, body').animate({scrollTop: $('.section-features').offset().top}, 1000); 
  });
  
  
  /* Navigation scroll */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  
  
  /* Animations on scroll */
  $('.wp-1').waypoint(function(direction) {
      $('.wp-1').addClass('animated fadeIn');
  }, {
      offset: '50%'
  });
  
  $('.wp-2').waypoint(function(direction) {
      $('.wp-2').addClass('animated fadeInUp');
  }, {
      offset: '50%'
  });
  
  $('.wp-3').waypoint(function(direction) {
      $('.wp-3').addClass('animated fadeIn');
  }, {
      offset: '50%'
  });
  
  $('.wp-4').waypoint(function(direction) {
      $('.wp-4').addClass('animated pulse');
  }, {
      offset: '50%'
  });
  
  
  /* Mobile navigation */
  $('.nav-icon').click(function() {
      var nav = $('.main-nav');
      var icon = $('.nav-icon i');
      
      nav.slideToggle(200);
      
      if (icon.hasClass('ion-navicon-round')) {
          icon.addClass('ion-close-round');
          icon.removeClass('ion-navicon-round');
      } else {
          icon.addClass('ion-navicon-round');
          icon.removeClass('ion-close-round');
      }        
  });
});