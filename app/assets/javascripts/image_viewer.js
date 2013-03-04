var ImageViewer = function(prefix, count) {
  this.prefix = prefix;
  this.count = count;
  this.init();
};

ImageViewer.prototype = {
  prefix: null,
  count: 0
};

ImageViewer.prototype.init = function() {
  var $thumbs = $('div#thumbs');
  for (var i = 1; i <= this.count; i++) {
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
  $(window).bind('load', function() {
    imageViewer.preloadImages();
  });
};

ImageViewer.prototype.baseImageUrl = function(index) {
  return "https://s3.amazonaws.com/erinrademacher.com/" + this.prefix + "_" + index;
}
ImageViewer.prototype.imageUrl = function(index) {
  return this.baseImageUrl(index) + ".jpg";
};

ImageViewer.prototype.thumbUrl = function(index) {
  return this.baseImageUrl(index) + "_Thumb.jpg";
};

ImageViewer.prototype.preloadImages = function() {
  for (var i = 2; i <= this.count; i++) {
    $('<img/>', { src: this.imageUrl(i) });
  }
};
