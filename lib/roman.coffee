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
    difference = 0
    @chars = numerals.split('')
    numbers = _.map @chars, (numeral) -> dictionary[numeral]
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
  
  romanize: (number) ->
    dictionary = {}
    numerals = []
    parts = number.toString().split("")
    
    for numeral, value of @dictionary
      dictionary[value] = numeral
    while parts.length < 4
      parts.unshift 0

    m = parseInt parts.shift()
    unless m == 0
      numerals.push [1..m].map( -> "M").join("")

    c = parseInt(parts.shift())
    unless c == 0
      numerals.push "CM" if c == 9
      if c > 5 && c < 9
        numerals.push "D#{[1..(c - 5)].map( -> "C").join("")}"
      numerals.push "D" if c == 5
      numerals.push "CD" if c == 4
      numerals.push [1..c].map( -> "C").join("") if c < 4
    
    x = parseInt parts.shift()
    unless x == 0
      numerals.push "XC" if x == 9
      if x > 5 && x < 9
        numerals.push "L#{[1..(x - 5)].map( -> "X").join("")}"
      numerals.push "L" if x == 5
      numerals.push "XL" if x == 4
      numerals.push [1..x].map( -> "X").join("") if x < 4
    
    i = parseInt parts.shift()
    console.log i
    unless i == 0
      numerals.push "IX" if i == 9
      if i > 5 && i < 9
        numerals.push "V#{[1..(i - 5)].map( -> "I").join("")}"
      numerals.push "V" if i == 5
      numerals.push "IV" if i == 4
      numerals.push [1..i].map( -> "I").join("") if i < 4
    numerals.join ""

window.Roman = Roman