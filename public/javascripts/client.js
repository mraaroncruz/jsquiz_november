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
      __extends(Image, BackboneModel);
      function Image() {
        Image.__super__.constructor.apply(this, arguments);
      }
      return Image;
    })();
    return Images = (function() {
      __extends(Images, BackboneCollection);
      function Images() {
        Images.__super__.constructor.apply(this, arguments);
      }
      return Images;
    })();
  });
}).call(this);
