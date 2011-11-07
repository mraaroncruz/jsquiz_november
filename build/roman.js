(function() {
  var Roman;
  Roman = (function() {
    function Roman() {}
    Roman.prototype.numberize = function(numerals) {
      return numerals.split('').length;
    };
    return Roman;
  })();
  window.Roman = Roman;
}).call(this);
