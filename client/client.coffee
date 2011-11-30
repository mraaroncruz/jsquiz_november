jQuery ->
  class Image extends Backbone.Model
  class Images extends Backbone.Collection
    model: Image

  _.each ["I", "V", "X", "L", "C", "D", "M"], (letter) ->

    window[letter] = new Images

    $.getJSON "/images/#{letter}", (urls) ->
      window[letter].reset(urls)
