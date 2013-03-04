// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

(function() {
  $('div#navigation li#portfolio').mouseenter(function() {
    var $tier2 = $('div#navigation ul#portfolio_tier2');
    if (!$tier2.is(':animated')) {
      $tier2.slideDown();
    }
  });
  $('div#navigation').mouseleave(function() {
    var $tier2 = $('div#navigation ul#portfolio_tier2');
    if (!portfolio && !$tier2.is(':animated')) {
      !$tier2.slideUp();
    }
  });
  $('a#email').attr('href', 'mailto:rademacher.erin@gmail.com');
  $('a#email').text('rademacher.erin@gmail.com');
  $('a#phone').attr('href', 'tel:1-716-930-4461');
  $('a#phone').text('716.930.4461');
})();
