function ImageViewer(prefix, count) {
   this.prefix = prefix;
   this.count = count;
   this.init();
}

ImageViewer.prototype = {
   prefix: null,
   count: 0
};

ImageViewer.prototype.init = function() {
   var $thumbs = $('div#thumbs');
   for (var i = 1; i <= this.count; i++)
   {
      var $img = $('<img/>', {
         src: this.thumbUrl(i)
      });
      $img.data('index', i)
      $img.click(function(event) {
         $('img#portal').attr('src', imageViewer.imageUrl($(event.target).data('index')));
      });
      $thumbs.append($img);
   }
   $('img#portal').attr('src', this.imageUrl(1));
};

ImageViewer.prototype.imageUrl = function(index) {
   return "https://s3.amazonaws.com/erinrademacher.com/" + this.prefix + "_" + index + ".jpg";
};

ImageViewer.prototype.thumbUrl = function(index) {
   return "https://s3.amazonaws.com/erinrademacher.com/" + this.prefix + "_" + index + "_Thumb.jpg";
};

(function() {
   $('div#navigation li#portfolio').mouseenter(function()
   {
      var $tier2 = $('div#navigation ul#portfolio_tier2');
      if (!$tier2.is(':animated'))
      {
         $tier2.slideDown();
      }
   });
   $('div#navigation').mouseleave(function()
   {
      var $tier2 = $('div#navigation ul#portfolio_tier2');
      if (!portfolio && !$tier2.is(':animated'))
      {
         !$tier2.slideUp();
      }
   });
   $('a#email').attr('href', 'mailto:rademacher.erin@gmail.com');
   $('a#email').text('rademacher.erin@gmail.com');
})();