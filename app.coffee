express = require 'express'
routes  = require './routes'
_       = require('underscore')._
Roman   = require './build/roman'
app = module.exports = express.createServer()
flickr = require('flickr-reflection')
flickrOptions =
  key: process.env.KEY
  secret: process.env.SECRET
  apis: ['photos']

# Configuration
app.configure ->
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(require('stylus').middleware( src: __dirname + '/public' ))
  app.use(app.router)
  app.use(express.static(__dirname + '/public'))

app.configure 'development', ->
  app.use(express.errorHandler( dumpExceptions: true, showStack: true ))

app.configure 'production', ->
  app.use(express.errorHandler())

# Routes

app.get '/', (req, res) ->
  res.render 'index.jade', title: "Roman.js"

getURL = (obj) ->
  console.log JSON.stringify obj
  "http://farm#{obj['farm']}.staticflickr.com/#{obj['server']}/#{obj['id']}_#{obj['secret']}.jpg"

app.get '/images/:letter', (req, res) ->
  letter = req.params.letter
  obj = {}
  flickr.connect flickrOptions, (err, api) ->
    api.photos.search tags: "the letter #{letter}", (err, data) ->
      photos =  _.map data.photos.photo, (photo) ->
        url: getURL(photo)
      res.send JSON.stringify(photos)

app.listen(3000)

console.log "Express server listening on port %d in %s mode", app.address().port, app.settings.env
