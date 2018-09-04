$( document ).ready(function() {

  function setTooltip(tooltip){
    $('.' + tooltip).addClass('show-tooltip');
  }
  function removeTooltip(tooltip){
    $('.' + tooltip).removeClass('show-tooltip');
  }



  function setInitialTooltip(){
    setTooltip('mama-tooltip');

    $('.elipse').css('animation', 'spin 16s linear infinite');
    $('.elipse').css('-webkit-animation', 'spin 16s linear infinite');
    $('.elipse').css('-moz-animation', 'spin 16s linear infinite');

  }
  function removeInitialTooltip(){
    removeTooltip('mama-tooltip');

    $('.elipse').css('animation', 'spin 8s linear infinite');
    $('.elipse').css('-webkit-animation', 'spin 8s linear infinite');
    $('.elipse').css('-moz-animation', 'spin 8s linear infinite');
  }

  $('.scale-up .col-test').click(function() {
    /*$(this).find(".mama-1").css('-webkit-transform', 'scale(1.9)');
    $(this).find(".mama-1").css('transform', 'scale(1.9)');*/
    $('.scale-up').addClass("scaled");
    setTimeout(function() {
      setInitialTooltip();
    }, 2000);
    setTimeout(function() {
      removeInitialTooltip();
    }, 4000);
  });

  var top = Math.random();
  while(top < 0.2 && top > 0.8){
    var top = Math.random();
  }
  var left = Math.random();
  while(left > 0.24 && left < 0.76){
    var left = Math.random();
  }

  $( "#particle-mama-div" ).hover(
    function() {
      $( ".elipse" ).addClass( "hover-elipse" );
      setTooltip('tooltips');
    }, function() {
      $( ".elipse" ).removeClass( "hover-elipse" );
      removeTooltip('tooltips');
    }
  );
  $( "#particle-mama" ).click(function() {
    $('.scale-up').removeClass("scaled");
    console.log('scalling down8');
  });

  $( "#particle-mama-div" ).css( "top", top*150 );
  $( "#particle-mama-div" ).css( "left", left*150 );


  $('#phone-input').mask('(00) 00000-0000');
  $('#owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots:false,
      autoWidth:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });
  $('#neighbors-carousel').owlCarousel({
      loop:false,
      margin:20,
      nav:false,
      dots:false,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause:true,

      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
  });
  $('.owl-carousel.owl-carousel-2').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });
});
