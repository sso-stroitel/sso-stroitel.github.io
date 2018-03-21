
// плавный скролл
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});

// фиксированный бар

$(window).on('scroll', function() {
  if($(window).scrollTop()) {
    $('header').addClass('navbar');
  }
  else {
    $('header').removeClass('navbar');
  }
})
