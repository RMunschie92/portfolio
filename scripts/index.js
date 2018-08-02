$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 250) {
      $('#back-to-top').fadeIn(200);
    } else {
      $('#back-to-top').fadeOut(200);
    }
  });

  $('#back-to-top').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  })
  $('#about-link').click(function() {
    var aboutOffset = $('#about-banner').offset().top;
    $('body,html').animate({
      scrollTop: aboutOffset
    }, 500);
  });
  $('#skills-link').click(function() {
    var skillsOffset = $('#skills-banner').offset().top;
    $('body,html').animate({
      scrollTop: skillsOffset
    }, 500);
  });
  $('#work-link').click(function() {
    var workOffset = $('#work-banner').offset().top;
    $('body,html').animate({
      scrollTop: workOffset
    }, 600);
  });
  $('#contact-link').click(function() {
    var contactOffset = $('#contact-banner').offset().top;
    $('body,html').animate({
      scrollTop: contactOffset
    }, 700);
  });
});
