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
      var dictionary, difference, numbers, sum, _i, _ref, _results;
      dictionary = this.dictionary;
      difference = 0;
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
    Roman.prototype.romanize = function(number) {
      var c, dictionary, i, m, numeral, numerals, parts, value, x, _i, _j, _k, _l, _m, _n, _o, _ref, _ref2, _ref3, _ref4, _results, _results2, _results3, _results4, _results5, _results6, _results7;
      dictionary = {};
      numerals = [];
      parts = number.toString().split("");
      _ref = this.dictionary;
      for (numeral in _ref) {
        value = _ref[numeral];
        dictionary[value] = numeral;
      }
      while (parts.length < 4) {
        parts.unshift(0);
      }
      m = parseInt(parts.shift());
      if (m !== 0) {
        numerals.push((function() {
          _results = [];
          for (var _i = 1; 1 <= m ? _i <= m : _i >= m; 1 <= m ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this).map(function() {
          return "M";
        }).join(""));
      }
      c = parseInt(parts.shift());
      if (c !== 0) {
        if (c === 9) {
          numerals.push("CM");
        }
        if (c > 5 && c < 9) {
          numerals.push("D" + ((function() {
            _results2 = [];
            for (var _j = 1, _ref2 = c - 5; 1 <= _ref2 ? _j <= _ref2 : _j >= _ref2; 1 <= _ref2 ? _j++ : _j--){ _results2.push(_j); }
            return _results2;
          }).apply(this).map(function() {
            return "C";
          }).join("")));
        }
        if (c === 5) {
          numerals.push("D");
        }
        if (c === 4) {
          numerals.push("CD");
        }
        if (c < 4) {
          numerals.push((function() {
            _results3 = [];
            for (var _k = 1; 1 <= c ? _k <= c : _k >= c; 1 <= c ? _k++ : _k--){ _results3.push(_k); }
            return _results3;
          }).apply(this).map(function() {
            return "C";
          }).join(""));
        }
      }
      x = parseInt(parts.shift());
      if (x !== 0) {
        if (x === 9) {
          numerals.push("XC");
        }
        if (x > 5 && x < 9) {
          numerals.push("L" + ((function() {
            _results4 = [];
            for (var _l = 1, _ref3 = x - 5; 1 <= _ref3 ? _l <= _ref3 : _l >= _ref3; 1 <= _ref3 ? _l++ : _l--){ _results4.push(_l); }
            return _results4;
          }).apply(this).map(function() {
            return "X";
          }).join("")));
        }
        if (x === 5) {
          numerals.push("L");
        }
        if (x === 4) {
          numerals.push("XL");
        }
        if (x < 4) {
          numerals.push((function() {
            _results5 = [];
            for (var _m = 1; 1 <= x ? _m <= x : _m >= x; 1 <= x ? _m++ : _m--){ _results5.push(_m); }
            return _results5;
          }).apply(this).map(function() {
            return "X";
          }).join(""));
        }
      }
      i = parseInt(parts.shift());
      console.log(i);
      if (i !== 0) {
        if (i === 9) {
          numerals.push("IX");
        }
        if (i > 5 && i < 9) {
          numerals.push("V" + ((function() {
            _results6 = [];
            for (var _n = 1, _ref4 = i - 5; 1 <= _ref4 ? _n <= _ref4 : _n >= _ref4; 1 <= _ref4 ? _n++ : _n--){ _results6.push(_n); }
            return _results6;
          }).apply(this).map(function() {
            return "I";
          }).join("")));
        }
        if (i === 5) {
          numerals.push("V");
        }
        if (i === 4) {
          numerals.push("IV");
        }
        if (i < 4) {
          numerals.push((function() {
            _results7 = [];
            for (var _o = 1; 1 <= i ? _o <= i : _o >= i; 1 <= i ? _o++ : _o--){ _results7.push(_o); }
            return _results7;
          }).apply(this).map(function() {
            return "I";
          }).join(""));
        }
      }
      return numerals.join("");
    };
    return Roman;
  })();
  window.Roman = Roman;
}).call(this);
