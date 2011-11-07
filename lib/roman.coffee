class Roman
  constructor: ->
    @dictionary = 
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000 

  numberize: (numerals) ->
    dictionary = @dictionary
    register = 0
    difference = 0
    sum = 0
    @chars = numerals.split('')
    numbers = _.map @chars, (numeral) ->
      dictionary[numeral]
    if numbers.length > 1
      _([1..numbers.length - 1]).each (curr, prev) ->
        if numbers[curr] > numbers[prev]
          difference += numbers[prev] * 2
      sum = _(numbers).reduce (sum, number) ->
        number + sum
      , 0
      sum - difference
    else
      numbers[0]



window.Roman = Roman