(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  jQuery(function() {
    var Image, Images;
    Image = (function() {
      __extends(Image, Backbone.Model);
      function Image() {
        Image.__super__.constructor.apply(this, arguments);
      }
      return Image;
    })();
    Images = (function() {
      __extends(Images, Backbone.Collection);
      function Images() {
        Images.__super__.constructor.apply(this, arguments);
      }
      Images.prototype.model = Image;
      return Images;
    })();
    return _.each(["I", "V", "X", "L", "C", "D", "M"], function(letter) {
      window[letter] = new Images;
      return $.getJSON("/images/" + letter, function(urls) {
        return window[letter].reset(urls);
      });
    });
  });
}).call(this);
