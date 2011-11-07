(function() {
  var Roman;
  Roman = (function() {
    function Roman() {
      this.dictionary = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
      };
    }
    Roman.prototype.numberize = function(numerals) {
      var dictionary, difference, numbers, register, sum, _i, _ref, _results;
      dictionary = this.dictionary;
      register = 0;
      difference = 0;
      sum = 0;
      this.chars = numerals.split('');
      numbers = _.map(this.chars, function(numeral) {
        return dictionary[numeral];
      });
      if (numbers.length > 1) {
        _((function() {
          _results = [];
          for (var _i = 1, _ref = numbers.length - 1; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this)).each(function(curr, prev) {
          if (numbers[curr] > numbers[prev]) {
            return difference += numbers[prev] * 2;
          }
        });
        sum = _(numbers).reduce(function(sum, number) {
          return number + sum;
        }, 0);
        return sum - difference;
      } else {
        return numbers[0];
      }
    };
    return Roman;
  })();
  window.Roman = Roman;
}).call(this);
